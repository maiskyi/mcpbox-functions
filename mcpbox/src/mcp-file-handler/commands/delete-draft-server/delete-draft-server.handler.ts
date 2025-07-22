import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';

import { DeleteDraftServerSucceedEvent } from '../../events/delete-draft-server-succeed';

import { DeleteDraftServerCommand } from './delete-draft-server.command';

@CommandHandler(DeleteDraftServerCommand)
export class DeleteDraftServerHandler
  implements ICommandHandler<DeleteDraftServerCommand>
{
  private readonly logger = new Logger(DeleteDraftServerHandler.name, {
    timestamp: true,
  });

  public constructor(
    private eventBus: EventBus,
    private strapi: StrapiClientService,
  ) {}

  public async execute({
    command: { data, documentId },
  }: DeleteDraftServerCommand) {
    try {
      const server = await this.strapi.servers.delete({
        documentId,
      });

      if (!server.documentId) throw new Error('No documentId');

      this.eventBus.publish(
        new DeleteDraftServerSucceedEvent({
          data,
          documentId,
        }),
      );
    } catch (error) {
      this.logger.error(error);
    }
  }
}
