import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';
import { OpenAIService } from '@services/openai';

import { SetServerCategorySucceedEvent } from '../../events/set-server-category-succeed';
import { SetServerPartitionFailedEvent } from '../../events/set-server-partition-failed';
import { ServerPartition } from '../../types';

import { SetServerCategoryCommand } from './set-server-category.command';

@CommandHandler(SetServerCategoryCommand)
export class SetServerCategoryHandler
  implements ICommandHandler<SetServerCategoryCommand>
{
  private readonly logger = new Logger(SetServerCategoryHandler.name, {
    timestamp: true,
  });

  public constructor(
    private eventBus: EventBus,
    private strapi: StrapiClientService,
    private openai: OpenAIService,
  ) {}

  private async genCategory({ readme }: { readme: string }) {
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
              ${readme}
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

  public async execute({
    command: { data, documentId, readme },
  }: SetServerCategoryCommand) {
    try {
      const { category } = await this.genCategory({ readme });

      const server = await this.strapi.servers.update({
        documentId,
        data: {
          Category: category,
        },
      });

      if (!server.documentId) throw new Error('No documentId');

      this.eventBus.publish(
        new SetServerCategorySucceedEvent({
          data,
          documentId,
        }),
      );
    } catch (error) {
      this.logger.error(error);
      this.eventBus.publish(
        new SetServerPartitionFailedEvent({
          data,
          documentId,
          partition: ServerPartition.Category,
        }),
      );
    }
  }
}
