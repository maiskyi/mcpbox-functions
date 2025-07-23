import { FileSchema } from '../../types';

interface ExistingServerFoundEventType {
  data: FileSchema;
  documentId: string;
}

export class ExistingServerFoundEvent {
  public constructor(public readonly event: ExistingServerFoundEventType) {}
}
