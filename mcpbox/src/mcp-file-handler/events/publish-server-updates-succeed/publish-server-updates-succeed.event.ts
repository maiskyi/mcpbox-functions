import { FileSchema } from '../../types';

interface PublishServerUpdatesSucceedEventType {
  data: FileSchema;
  documentId: string;
}

export class PublishServerUpdatesSucceedEvent {
  public constructor(
    public readonly event: PublishServerUpdatesSucceedEventType,
  ) {}
}
