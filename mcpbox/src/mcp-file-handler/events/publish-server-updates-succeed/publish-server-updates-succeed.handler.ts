import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { PublishServerUpdatesSucceedEvent } from './publish-server-updates-succeed.event';

@EventsHandler(PublishServerUpdatesSucceedEvent)
export class PublishServerUpdatesSucceedHandler
  implements IEventHandler<PublishServerUpdatesSucceedEvent>
{
  private readonly logger = new Logger(
    PublishServerUpdatesSucceedHandler.name,
    {
      timestamp: true,
    },
  );

  public handle({ event: { data } }: PublishServerUpdatesSucceedEvent) {
    this.logger.log(`Publishing server updates: ${data.title} succeed`);
  }
}
