import { FileSchema } from '../../types';

interface SetServerOverviewSucceedEventType {
  data: FileSchema;
  documentId: string;
}

export class SetServerOverviewSucceedEvent {
  public constructor(
    public readonly event: SetServerOverviewSucceedEventType,
  ) {}
}
