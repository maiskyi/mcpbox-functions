import { Command } from '@nestjs/cqrs';

import { FileSchema } from '../../types';

interface UpdateServerToolsSettingsCommandType {
  data: FileSchema;
  documentId: string;
}

export class UpdateServerToolsSettingsCommand extends Command<void> {
  public constructor(
    public readonly command: UpdateServerToolsSettingsCommandType,
  ) {
    super();
  }
}
