import { FileSchema, ServerPartition } from '../../types';

interface UpdateServerPartitionFailedEventType {
  data: FileSchema;
  documentId: string;
  partition: ServerPartition;
}

export class UpdateServerPartitionFailedEvent {
  public constructor(
    public readonly event: UpdateServerPartitionFailedEventType,
  ) {}
}
