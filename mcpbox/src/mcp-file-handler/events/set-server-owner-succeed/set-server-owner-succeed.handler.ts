import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { SetServerOwnerSucceedEvent } from './set-server-owner-succeed.event';

@EventsHandler(SetServerOwnerSucceedEvent)
export class SetServerOwnerSucceedHandler
  implements IEventHandler<SetServerOwnerSucceedEvent>
{
  private readonly logger = new Logger(SetServerOwnerSucceedHandler.name, {
    timestamp: true,
  });

  public handle({ event: { data } }: SetServerOwnerSucceedEvent) {
    this.logger.log(`Setting server owner: ${data.title} succeed`);
  }
}
