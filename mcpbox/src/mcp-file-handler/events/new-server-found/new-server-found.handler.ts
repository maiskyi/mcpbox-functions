import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { NewServerFoundEvent } from './new-server-found.event';

@EventsHandler(NewServerFoundEvent)
export class NewServerFoundHandler
  implements IEventHandler<NewServerFoundEvent>
{
  public handle(_event: NewServerFoundEvent) {}
}
