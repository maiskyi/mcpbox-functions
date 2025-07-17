import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { UpdateServerOwnerSucceedEvent } from './update-server-owner-succeed.event';

@EventsHandler(UpdateServerOwnerSucceedEvent)
export class UpdateServerOwnerSucceedHandler
  implements IEventHandler<UpdateServerOwnerSucceedEvent>
{
  private readonly logger = new Logger(UpdateServerOwnerSucceedHandler.name, {
    timestamp: true,
  });

  public handle({ event: { data } }: UpdateServerOwnerSucceedEvent) {
    this.logger.log(`Updating server owner: ${data.title} succeed`);
  }
}
