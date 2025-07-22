import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { SetServerPartitionFailedEvent } from './set-server-partition-failed.event';

@EventsHandler(SetServerPartitionFailedEvent)
export class SetServerPartitionFailedHandler
  implements IEventHandler<SetServerPartitionFailedEvent>
{
  private readonly logger = new Logger(SetServerPartitionFailedHandler.name, {
    timestamp: true,
  });

  public handle({ event: { data, partition } }: SetServerPartitionFailedEvent) {
    this.logger.log(
      `Updating server partition ${partition}: ${data.title} failed`,
    );
  }
}
