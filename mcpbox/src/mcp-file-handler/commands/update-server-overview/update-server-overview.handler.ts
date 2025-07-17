import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';
import { GithubClientService } from '@services/github';
import { OpenAIService } from '@services/openai';

import { UpdateServerOverviewSucceedEvent } from '../../events/update-server-overview-succeed';

import { UpdateServerOverviewCommand } from './update-server-overview.command';

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

  private async genOverview({ readme }: { readme: string }) {
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
          content: readme,
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
    command: { data, documentId, readme },
  }: UpdateServerOverviewCommand) {
    try {
      const { overview } = await this.genOverview({ readme });

      const server = await this.strapi.servers.update({
        documentId,
        data: {
          Overview: overview,
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
