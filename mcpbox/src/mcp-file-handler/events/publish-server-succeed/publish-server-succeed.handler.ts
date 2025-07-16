import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { PublishServerSucceedEvent } from './publish-server-succeed.event';

@EventsHandler(PublishServerSucceedEvent)
export class PublishServerSucceedHandler
  implements IEventHandler<PublishServerSucceedEvent>
{
  public handle(_event: PublishServerSucceedEvent) {}
}
