import { Command } from '@nestjs/cqrs';

import { FileSchema } from '../../types';

interface UpdateServerCategoryCommandType {
  data: FileSchema;
  documentId: string;
}

export class UpdateServerCategoryCommand extends Command<void> {
  public constructor(public readonly command: UpdateServerCategoryCommandType) {
    super();
  }
}
