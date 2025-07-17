import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { GetServerReadmeSucceedEvent } from './get-server-readme-succeed.event';

@EventsHandler(GetServerReadmeSucceedEvent)
export class GetServerReadmeSucceedHandler
  implements IEventHandler<GetServerReadmeSucceedEvent>
{
  private readonly logger = new Logger(GetServerReadmeSucceedHandler.name, {
    timestamp: true,
  });

  public handle({ event }: GetServerReadmeSucceedEvent) {
    this.logger.log(`Getting server ReadMe: ${event.data.title}`);
  }
}
