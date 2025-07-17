import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { UpdateServerCategorySucceedEvent } from './update-server-category-succeed.event';

@EventsHandler(UpdateServerCategorySucceedEvent)
export class UpdateServerCategorySucceedHandler
  implements IEventHandler<UpdateServerCategorySucceedEvent>
{
  private readonly logger = new Logger(
    UpdateServerCategorySucceedHandler.name,
    {
      timestamp: true,
    },
  );

  public handle({ event: { data } }: UpdateServerCategorySucceedEvent) {
    this.logger.log(`Updating server category: ${data.title} succeed`);
  }
}
