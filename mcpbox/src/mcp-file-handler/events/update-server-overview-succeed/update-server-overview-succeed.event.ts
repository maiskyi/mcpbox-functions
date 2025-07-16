import { FileSchema } from '../../types';

interface UpdateServerOverviewSucceedEventType {
  data: FileSchema;
  documentId: string;
}

export class UpdateServerOverviewSucceedEvent {
  public constructor(
    public readonly event: UpdateServerOverviewSucceedEventType,
  ) {}
}
