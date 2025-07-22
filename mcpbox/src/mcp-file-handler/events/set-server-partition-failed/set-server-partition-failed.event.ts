import { FileSchema } from '../../types';

import { SetServerPartitionFailedName } from './set-server-partition-failed.types';

interface SetServerPartitionFailedEventType {
  data: FileSchema;
  documentId: string;
  partition: SetServerPartitionFailedName;
}

export class SetServerPartitionFailedEvent {
  public constructor(
    public readonly event: SetServerPartitionFailedEventType,
  ) {}
}
