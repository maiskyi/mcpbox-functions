import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { UpdateServerLogoSucceedEvent } from './update-server-logo-succeed.event';

@EventsHandler(UpdateServerLogoSucceedEvent)
export class UpdateServerLogoSucceedHandler
  implements IEventHandler<UpdateServerLogoSucceedEvent>
{
  private readonly logger = new Logger(UpdateServerLogoSucceedHandler.name, {
    timestamp: true,
  });

  public handle({ event: { data } }: UpdateServerLogoSucceedEvent) {
    this.logger.log(`Updating server logo: ${data.title} succeed`);
  }
}
