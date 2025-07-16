import { Command } from '@nestjs/cqrs';

import { FileSchema } from '../../types';

interface CreateDraftServerCommandType {
  data: FileSchema;
}

export class CreateDraftServerCommand extends Command<void> {
  public constructor(public readonly command: CreateDraftServerCommandType) {
    super();
  }
}
