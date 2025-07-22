import { Command } from '@nestjs/cqrs';

import { FileSchema } from '../../types';

interface DeleteDraftServerCommandType {
  data: FileSchema;
  documentId: string;
}

export class DeleteDraftServerCommand extends Command<void> {
  public constructor(public readonly command: DeleteDraftServerCommandType) {
    super();
  }
}
