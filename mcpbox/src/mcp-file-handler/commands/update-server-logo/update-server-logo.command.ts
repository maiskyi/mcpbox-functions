import { Command } from '@nestjs/cqrs';

import { FileSchema } from '../../types';

interface UpdateServerLogoCommandType {
  data: FileSchema;
  documentId: string;
}

export class UpdateServerLogoCommand extends Command<void> {
  public constructor(public readonly command: UpdateServerLogoCommandType) {
    super();
  }
}
