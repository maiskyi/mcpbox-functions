import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { SetServerCategorySucceedEvent } from './set-server-category-succeed.event';

@EventsHandler(SetServerCategorySucceedEvent)
export class SetServerCategorySucceedHandler
  implements IEventHandler<SetServerCategorySucceedEvent>
{
  private readonly logger = new Logger(SetServerCategorySucceedHandler.name, {
    timestamp: true,
  });

  public handle({ event: { data } }: SetServerCategorySucceedEvent) {
    this.logger.log(`Updating server category: ${data.title} succeed`);
  }
}
