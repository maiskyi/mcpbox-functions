import { FileSchema } from '../../types';

interface SetServerCategorySucceedEventType {
  data: FileSchema;
  documentId: string;
}

export class SetServerCategorySucceedEvent {
  public constructor(
    public readonly event: SetServerCategorySucceedEventType,
  ) {}
}
