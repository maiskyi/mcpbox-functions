import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { CreateDraftServerSucceedEvent } from './create-draft-server-succeed.event';

@EventsHandler(CreateDraftServerSucceedEvent)
export class CreateDraftServerSucceedHandler
  implements IEventHandler<CreateDraftServerSucceedEvent>
{
  public handle(_event: CreateDraftServerSucceedEvent) {}
}
