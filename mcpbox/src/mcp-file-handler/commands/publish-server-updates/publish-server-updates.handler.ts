import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { DTO, StrapiClientService } from '@services/strapi';

import { PublishServerUpdatesSucceedEvent } from '../../events/publish-server-updates-succeed';

import { PublishServerUpdatesCommand } from './publish-server-updates.command';

@CommandHandler(PublishServerUpdatesCommand)
export class PublishServerUpdatesHandler
  implements ICommandHandler<PublishServerUpdatesCommand>
{
  private readonly logger = new Logger(PublishServerUpdatesHandler.name, {
    timestamp: true,
  });

  public constructor(
    private eventBus: EventBus,
    private strapi: StrapiClientService,
  ) {}

  public async execute({
    command: { data, documentId },
  }: PublishServerUpdatesCommand) {
    try {
      const server = await this.strapi.servers.update({
        documentId,
        data: {},
        status: DTO.PublicationStatus.Published,
      });

      if (!server.documentId) throw new Error('No documentId');

      this.eventBus.publish(
        new PublishServerUpdatesSucceedEvent({
          data,
          documentId,
        }),
      );
    } catch (error) {
      this.logger.error(error);
    }
  }
}
