import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { UpdateServerOwnerSucceedEvent } from './update-server-owner-succeed.event';

@EventsHandler(UpdateServerOwnerSucceedEvent)
export class UpdateServerOwnerSucceedHandler
  implements IEventHandler<UpdateServerOwnerSucceedEvent>
{
  public handle(_event: UpdateServerOwnerSucceedEvent) {}
}
