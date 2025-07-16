import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { UpdateServerCategorySucceedEvent } from './update-server-category-succeed.event';

@EventsHandler(UpdateServerCategorySucceedEvent)
export class UpdateServerCategorySucceedHandler
  implements IEventHandler<UpdateServerCategorySucceedEvent>
{
  public handle(_event: UpdateServerCategorySucceedEvent) {}
}
