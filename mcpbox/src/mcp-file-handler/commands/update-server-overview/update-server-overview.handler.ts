import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';

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
  ) {}

  public async execute({
    command: { data, documentId },
  }: UpdateServerOverviewCommand) {
    try {
      const server = await this.strapi.servers.update({
        documentId,
        data: {
          Overview: 'test',
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
      //   this.eventBus.publish(
      //     new CheckingFilesToUploadFailedEvent({
      //       ...command,
      //       error,
      //     }),
      //   );
    }
  }
}
