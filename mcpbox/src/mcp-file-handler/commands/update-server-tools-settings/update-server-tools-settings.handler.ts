import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';

import { UpdateServerPartitionFailedEvent } from '../../events/update-server-partition-failed';
import { UpdateServerToolsSettingsSucceedEvent } from '../../events/update-server-tools-settings-succeed';
import { ServerPartition } from '../../types';

import { UpdateServerToolsSettingsCommand } from './update-server-tools-settings.command';

@CommandHandler(UpdateServerToolsSettingsCommand)
export class UpdateServerToolsSettingsHandler
  implements ICommandHandler<UpdateServerToolsSettingsCommand>
{
  private readonly logger = new Logger(UpdateServerToolsSettingsHandler.name, {
    timestamp: true,
  });

  public constructor(
    private eventBus: EventBus,
    private strapi: StrapiClientService,
  ) {}

  public async execute({
    command: { data, documentId },
  }: UpdateServerToolsSettingsCommand) {
    try {
      const server = await this.strapi.servers.update({
        documentId,
        data: {
          Tools: data.tools,
          Settings: data.settings,
        },
      });

      if (!server.documentId) throw new Error('No documentId');

      this.eventBus.publish(
        new UpdateServerToolsSettingsSucceedEvent({
          data,
          documentId,
        }),
      );
    } catch (error) {
      this.logger.error(error);
      this.eventBus.publish(
        new UpdateServerPartitionFailedEvent({
          data,
          documentId,
          partition: ServerPartition.ToolsSettings,
        }),
      );
    }
  }
}
