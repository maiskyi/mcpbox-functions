import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { SetServerLogoSucceedEvent } from './set-server-logo-succeed.event';

@EventsHandler(SetServerLogoSucceedEvent)
export class SetServerLogoSucceedHandler
  implements IEventHandler<SetServerLogoSucceedEvent>
{
  private readonly logger = new Logger(SetServerLogoSucceedHandler.name, {
    timestamp: true,
  });

  public handle({ event: { data } }: SetServerLogoSucceedEvent) {
    this.logger.log(`Updating server logo: ${data.title} succeed`);
  }
}
