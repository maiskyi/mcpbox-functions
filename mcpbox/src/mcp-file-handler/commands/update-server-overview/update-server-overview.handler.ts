import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';
import { GithubClientService } from '@services/github';
import { OpenAIService } from '@services/openai';

import { UpdateServerOverviewSucceedEvent } from '../../events/update-server-overview-succeed';

import { UpdateServerOverviewCommand } from './update-server-overview.command';
import {
  GenOverviewParams,
  GenCategoryParams,
} from './update-server-overview.types';

@CommandHandler(UpdateServerOverviewCommand)
export class UpdateServerOverviewHandler
  implements ICommandHandler<UpdateServerOverviewCommand>
{
  private readonly logger = new Logger(UpdateServerOverviewHandler.name, {
    timestamp: true,
  });

  public constructor(
    private eventBus: EventBus,
    private strapi: StrapiClientService,
    private github: GithubClientService,
    private openai: OpenAIService,
  ) {}

  private async genCategory({ content }: GenCategoryParams) {
    const { serverCategories } = await this.strapi.serverCategories.findMany({
      pagination: {
        limit: 9999,
      },
    });

    const { choices } = await this.openai.chat.completions.create({
      model: 'gpt-4.1-nano',
      messages: [
        {
          role: 'system',
          content: `You are an AI assistant that classifies MCP Servers into high-level categories.`,
        },
        {
          role: 'user',
          content: `
            Here is the list of available categories (in JSON):
            ${JSON.stringify(serverCategories, null, 2)}
            And here is the README of an MCP server:
            ${content}
            Please reply with the most appropriate category \`documentId\` (from the JSON above) that matches the server's purpose.
            Respond only with the documentId.
            If there is no good match respond with \`documentId\` for Other category.
            Output should be a string.
          `,
        },
      ],
    });

    const suggestedDocumentId = choices[0].message.content;

    const documentId = serverCategories.find((item) => {
      return item ? item.documentId === suggestedDocumentId : false;
    })?.documentId;

    if (documentId) return { category: documentId };

    return { category: choices[0].message.content };
  }

  private async genOverview({ content }: GenOverviewParams) {
    const { choices } = await this.openai.chat.completions.create({
      model: 'gpt-4.1-nano',
      messages: [
        {
          role: 'system',
          content:
            'You are a technical assistant that summarizes GitHub README files.',
        },
        {
          role: 'user',
          content: 'Create summary for the following GitHub README:',
        },
        {
          role: 'user',
          content: content,
        },
        {
          role: 'user',
          content:
            'Summary should use markdown format. Do not use emojis, tables. Use following template for output:',
        },
        {
          role: 'user',
          content: `
            ### What is {name}?
            ### How to use {name}?
            ### Key features of {name}?
            ### Use cases of {name}?
          `,
        },
      ],
    });

    return {
      overview: choices[0].message.content,
    };
  }

  public async execute({
    command: { data, documentId },
  }: UpdateServerOverviewCommand) {
    try {
      const { data: readme } =
        await this.github.repos.reposGetReadmeBySourceCodeUrl({
          url: data.githubUrl,
        });

      const content = Buffer.from(readme.content, 'base64').toString('utf-8');

      const [{ overview }, { category }] = await Promise.all([
        this.genOverview({ content }),
        this.genCategory({ content }),
      ]);

      const server = await this.strapi.servers.update({
        documentId,
        data: {
          Overview: overview,
          Category: category,
        },
      });

      if (!server.documentId) throw new Error('No documentId');

      this.eventBus.publish(
        new UpdateServerOverviewSucceedEvent({
          data,
          documentId,
        }),
      );
    } catch (error) {
      this.logger.error(error);
    }
  }
}
