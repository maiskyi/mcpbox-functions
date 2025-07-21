import { Command } from '@nestjs/cqrs';

import { FileSchema } from '../../types';

interface SetServerLogoCommandType {
  data: FileSchema;
  documentId: string;
}

export class SetServerLogoCommand extends Command<void> {
  public constructor(public readonly command: SetServerLogoCommandType) {
    super();
  }
}
