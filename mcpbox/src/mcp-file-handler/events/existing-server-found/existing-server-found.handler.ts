import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { ExistingServerFoundEvent } from './existing-server-found.event';

@EventsHandler(ExistingServerFoundEvent)
export class ExistingServerFoundHandler
  implements IEventHandler<ExistingServerFoundEvent>
{
  private readonly logger = new Logger(ExistingServerFoundHandler.name, {
    timestamp: true,
  });

  public handle({ event }: ExistingServerFoundEvent) {
    this.logger.log(`Existing server found: ${event.data.title}`);
  }
}
