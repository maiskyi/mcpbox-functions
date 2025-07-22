import { FileSchema } from '../../types';

interface DeleteDraftServerSucceedEventType {
  data: FileSchema;
  documentId: string;
}

export class DeleteDraftServerSucceedEvent {
  public constructor(
    public readonly event: DeleteDraftServerSucceedEventType,
  ) {}
}
