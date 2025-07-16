import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { UpdateServerOverviewSucceedEvent } from './update-server-overview-succeed.event';

@EventsHandler(UpdateServerOverviewSucceedEvent)
export class UpdateServerOverviewSucceedHandler
  implements IEventHandler<UpdateServerOverviewSucceedEvent>
{
  public handle(_event: UpdateServerOverviewSucceedEvent) {}
}
