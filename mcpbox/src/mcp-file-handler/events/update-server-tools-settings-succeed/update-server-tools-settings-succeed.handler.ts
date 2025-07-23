import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { UpdateServerToolsSettingsSucceedEvent } from './update-server-tools-settings-succeed.event';

@EventsHandler(UpdateServerToolsSettingsSucceedEvent)
export class UpdateServerToolsSettingsSucceedHandler
  implements IEventHandler<UpdateServerToolsSettingsSucceedEvent>
{
  private readonly logger = new Logger(
    UpdateServerToolsSettingsSucceedHandler.name,
    {
      timestamp: true,
    },
  );

  public handle({ event: { data } }: UpdateServerToolsSettingsSucceedEvent) {
    this.logger.log(
      `Updating server tools and settings for: ${data.title} succeed`,
    );
  }
}
