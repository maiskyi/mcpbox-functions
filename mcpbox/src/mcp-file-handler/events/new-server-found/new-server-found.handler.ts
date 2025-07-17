import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { NewServerFoundEvent } from './new-server-found.event';

@EventsHandler(NewServerFoundEvent)
export class NewServerFoundHandler
  implements IEventHandler<NewServerFoundEvent>
{
  private readonly logger = new Logger(NewServerFoundHandler.name, {
    timestamp: true,
  });

  public handle({ event }: NewServerFoundEvent) {
    this.logger.log(`New server found: ${event.data.title}`);
  }
}
