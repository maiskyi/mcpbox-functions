import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';

import { SetServerPartitionFailedEvent } from '../..//events/set-server-partition-failed';
import { SetServerLogoSucceedEvent } from '../../events/set-server-logo-succeed';
import { ServerPartition } from '../../types';

import { SetServerLogoCommand } from './set-server-logo.command';

@CommandHandler(SetServerLogoCommand)
export class SetServerLogoHandler
  implements ICommandHandler<SetServerLogoCommand>
{
  private readonly logger = new Logger(SetServerLogoHandler.name, {
    timestamp: true,
  });

  public constructor(
    private eventBus: EventBus,
    private strapi: StrapiClientService,
  ) {}

  public async execute({
    command: { data, documentId },
  }: SetServerLogoCommand) {
    try {
      if (data.logo) {
        const {
          data: [file],
        } = await this.strapi.upload.uploadCreateByUrl({
          url: data.logo,
          fileName: data.title,
        });

        const server = await this.strapi.servers.update({
          documentId,
          data: {
            Logo: `${file.id}`,
          },
        });

        if (!server.documentId) throw new Error('No documentId');
      }

      this.eventBus.publish(
        new SetServerLogoSucceedEvent({
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
