import { FileSchema } from '../../types';

interface SetServerOwnerSucceedEventType {
  data: FileSchema;
  documentId: string;
}

export class SetServerOwnerSucceedEvent {
  public constructor(public readonly event: SetServerOwnerSucceedEventType) {}
}
