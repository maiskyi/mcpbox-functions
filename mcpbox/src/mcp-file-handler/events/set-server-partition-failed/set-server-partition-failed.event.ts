import { FileSchema, ServerPartition } from '../../types';

interface SetServerPartitionFailedEventType {
  data: FileSchema;
  documentId: string;
  partition: ServerPartition;
}

export class SetServerPartitionFailedEvent {
  public constructor(
    public readonly event: SetServerPartitionFailedEventType,
  ) {}
}
