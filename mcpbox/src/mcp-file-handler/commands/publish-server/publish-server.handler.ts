import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { DTO, StrapiClientService } from '@services/strapi';

import { UpdateServerOwnerSucceedEvent } from '../../events/update-server-owner-succeed';

import { PublishServerCommand } from './publish-server.command';

@CommandHandler(PublishServerCommand)
export class PublishServerHandler
  implements ICommandHandler<PublishServerCommand>
{
  private readonly logger = new Logger(PublishServerHandler.name, {
    timestamp: true,
  });

  public constructor(
    private eventBus: EventBus,
    private strapi: StrapiClientService,
  ) {}

  public async execute({
    command: { data, documentId },
  }: PublishServerCommand) {
    try {
      const server = await this.strapi.servers.update({
        documentId,
        data: {
          Slug: 'test1',
        },
        status: DTO.PublicationStatus.Published,
      });

      if (!server.documentId) throw new Error('No documentId');

      // this.eventBus.publish(
      //   new UpdateServerOwnerSucceedEvent({
      //     data,
      //     documentId,
      //   }),
      // );
    } catch (error) {
      this.logger.error(error);
      //   this.eventBus.publish(
      //     new CheckingFilesToUploadFailedEvent({
      //       ...command,
      //       error,
      //     }),
      //   );
    }
  }
}
