import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { UpdateServerPartitionFailedEvent } from './update-server-partition-failed.event';

@EventsHandler(UpdateServerPartitionFailedEvent)
export class UpdateServerPartitionFailedHandler
  implements IEventHandler<UpdateServerPartitionFailedEvent>
{
  private readonly logger = new Logger(
    UpdateServerPartitionFailedHandler.name,
    {
      timestamp: true,
    },
  );

  public handle({
    event: { data, partition },
  }: UpdateServerPartitionFailedEvent) {
    this.logger.log(
      `Updating server partition ${partition}: ${data.title} failed`,
    );
  }
}
