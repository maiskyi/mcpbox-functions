import { Command } from '@nestjs/cqrs';

import { FileSchema } from '../../types';

interface UpdateServerOwnerCommandType {
  data: FileSchema;
  documentId: string;
}

export class UpdateServerOwnerCommand extends Command<void> {
  public constructor(public readonly command: UpdateServerOwnerCommandType) {
    super();
  }
}
