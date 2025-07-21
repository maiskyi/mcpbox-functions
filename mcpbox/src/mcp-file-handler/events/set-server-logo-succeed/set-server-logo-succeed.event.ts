import { FileSchema } from '../../types';

interface SetServerLogoSucceedEventType {
  data: FileSchema;
  documentId: string;
}

export class SetServerLogoSucceedEvent {
  public constructor(public readonly event: SetServerLogoSucceedEventType) {}
}
