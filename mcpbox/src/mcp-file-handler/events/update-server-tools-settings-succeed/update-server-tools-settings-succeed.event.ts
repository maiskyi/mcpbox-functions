import { FileSchema } from '../../types';

interface UpdateServerToolsSettingsSucceedEventType {
  data: FileSchema;
  documentId: string;
}

export class UpdateServerToolsSettingsSucceedEvent {
  public constructor(
    public readonly event: UpdateServerToolsSettingsSucceedEventType,
  ) {}
}
