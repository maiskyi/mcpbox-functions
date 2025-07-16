import { FileSchema } from '../../types';

interface UpdateServerOwnerSucceedEventType {
  data: FileSchema;
  documentId: string;
}

export class UpdateServerOwnerSucceedEvent {
  public constructor(
    public readonly event: UpdateServerOwnerSucceedEventType,
  ) {}
}
