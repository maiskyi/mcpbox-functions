import { Command } from '@nestjs/cqrs';

import { FileSchema } from '../../types';

interface SetServerOwnerCommandType {
  data: FileSchema;
  documentId: string;
}

export class SetServerOwnerCommand extends Command<void> {
  public constructor(public readonly command: SetServerOwnerCommandType) {
    super();
  }
}
