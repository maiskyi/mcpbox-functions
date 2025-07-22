import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { DeleteDraftServerSucceedEvent } from './delete-draft-server-succeed.event';

@EventsHandler(DeleteDraftServerSucceedEvent)
export class DeleteDraftServerSucceedHandler
  implements IEventHandler<DeleteDraftServerSucceedEvent>
{
  private readonly logger = new Logger(DeleteDraftServerSucceedEvent.name, {
    timestamp: true,
  });

  public handle({ event }: DeleteDraftServerSucceedEvent) {
    this.logger.log(`Deleting draft server: ${event.data.title} succeed`);
  }
}
