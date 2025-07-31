import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';

import { SetServerLogoSucceedEvent } from '../../events/set-server-logo-succeed';

import { SetServerLogoCommand } from './set-server-logo.command';
import { DEFAULT_ICONS } from './set-server-logo.const';

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
      if (data.logo && !DEFAULT_ICONS.includes(data.logo)) {
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
        new SetServerLogoSucceedEvent({
          data,
          documentId,
        }),
      );
    }
  }
}
