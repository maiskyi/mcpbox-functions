import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { GetServerReadmeSucceedEvent } from './get-server-readme-succeed.event';

@EventsHandler(GetServerReadmeSucceedEvent)
export class GetServerReadmeSucceedHandler
  implements IEventHandler<GetServerReadmeSucceedEvent>
{
  public handle(_event: GetServerReadmeSucceedEvent) {}
}
