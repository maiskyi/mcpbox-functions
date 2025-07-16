import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { PublishServerSucceedEvent } from './publish-server-succeed.event';

@EventsHandler(PublishServerSucceedEvent)
export class PublishServerSucceedHandler
  implements IEventHandler<PublishServerSucceedEvent>
{
  private readonly logger = new Logger(PublishServerSucceedHandler.name, {
    timestamp: true,
  });

  public handle({ event: { data } }: PublishServerSucceedEvent) {
    this.logger.log(`Server ${data.title} successfully published`);
  }
}
