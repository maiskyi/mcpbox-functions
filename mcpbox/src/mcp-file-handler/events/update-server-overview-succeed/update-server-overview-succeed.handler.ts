import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { UpdateServerOverviewSucceedEvent } from './update-server-overview-succeed.event';

@EventsHandler(UpdateServerOverviewSucceedEvent)
export class UpdateServerOverviewSucceedHandler
  implements IEventHandler<UpdateServerOverviewSucceedEvent>
{
  private readonly logger = new Logger(
    UpdateServerOverviewSucceedHandler.name,
    {
      timestamp: true,
    },
  );

  public handle({ event: { data } }: UpdateServerOverviewSucceedEvent) {
    this.logger.log(`Updating server overview: ${data.title} succeed`);
  }
}
