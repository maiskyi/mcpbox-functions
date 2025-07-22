import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';

import { CreateDraftServerSucceedEvent } from '../../events/create-draft-server-succeed';

import { DeleteDraftServerCommand } from './delete-draft-server.command';

@CommandHandler(DeleteDraftServerCommand)
export class CreateDraftServerHandler
  implements ICommandHandler<DeleteDraftServerCommand>
{
  private readonly logger = new Logger(CreateDraftServerHandler.name, {
    timestamp: true,
  });

  public constructor(
    private eventBus: EventBus,
    private strapi: StrapiClientService,
  ) {}

  public async execute({ command: { data } }: DeleteDraftServerCommand) {
    try {
      const { documentId } = await this.strapi.servers.create({
        data: {
          Title: data.title,
          Description: data.description,
          GitHubUrl: data.githubUrl,
          IsOfficial: data.isOfficial,
          Tools: JSON.stringify(data.tools),
          Settings: JSON.stringify(data.settings),
        },
      });

      if (!documentId) throw new Error('No documentId');

      this.eventBus.publish(
        new CreateDraftServerSucceedEvent({
          data,
          documentId,
        }),
      );
    } catch (error) {
      this.logger.error(error);
    }
  }
}
