import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { CreateDraftServerSucceedEvent } from './create-draft-server-succeed.event';

@EventsHandler(CreateDraftServerSucceedEvent)
export class CreateDraftServerSucceedHandler
  implements IEventHandler<CreateDraftServerSucceedEvent>
{
  private readonly logger = new Logger(CreateDraftServerSucceedHandler.name, {
    timestamp: true,
  });

  public handle({ event }: CreateDraftServerSucceedEvent) {
    this.logger.log(`Creating draft server: ${event.data.title} succeed`);
  }
}
