import { FileSchema } from '../../types';

interface CreateDraftServerSucceedEventType {
  data: FileSchema;
  documentId: string;
}

export class CreateDraftServerSucceedEvent {
  public constructor(
    public readonly event: CreateDraftServerSucceedEventType,
  ) {}
}
