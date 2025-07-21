import { FileSchema } from '../../types';

interface UpdateServerLogoSucceedEventType {
  data: FileSchema;
  documentId: string;
}

export class UpdateServerLogoSucceedEvent {
  public constructor(public readonly event: UpdateServerLogoSucceedEventType) {}
}
