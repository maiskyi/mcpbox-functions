import { FileSchema } from '../../types';

interface UpdateServerCategorySucceedEventType {
  data: FileSchema;
  documentId: string;
}

export class UpdateServerCategorySucceedEvent {
  public constructor(
    public readonly event: UpdateServerCategorySucceedEventType,
  ) {}
}
