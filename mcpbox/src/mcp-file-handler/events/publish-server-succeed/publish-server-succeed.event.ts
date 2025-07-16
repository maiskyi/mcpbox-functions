import { FileSchema } from '../../types';

interface PublishServerSucceedEventType {
  data: FileSchema;
  documentId: string;
}

export class PublishServerSucceedEvent {
  public constructor(public readonly event: PublishServerSucceedEventType) {}
}
