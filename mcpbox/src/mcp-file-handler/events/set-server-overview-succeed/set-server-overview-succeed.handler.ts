import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { SetServerOverviewSucceedEvent } from './set-server-overview-succeed.event';

@EventsHandler(SetServerOverviewSucceedEvent)
export class SetServerOverviewSucceedHandler
  implements IEventHandler<SetServerOverviewSucceedEvent>
{
  private readonly logger = new Logger(SetServerOverviewSucceedHandler.name, {
    timestamp: true,
  });

  public handle({ event: { data } }: SetServerOverviewSucceedEvent) {
    this.logger.log(`Updating server overview: ${data.title} succeed`);
  }
}
