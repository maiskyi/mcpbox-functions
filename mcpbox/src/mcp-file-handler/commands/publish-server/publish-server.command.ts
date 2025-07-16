import { Command } from '@nestjs/cqrs';

import { FileSchema } from '../../types';

interface PublishServerCommandType {
  data: FileSchema;
  documentId: string;
}

export class PublishServerCommand extends Command<void> {
  public constructor(public readonly command: PublishServerCommandType) {
    super();
  }
}
