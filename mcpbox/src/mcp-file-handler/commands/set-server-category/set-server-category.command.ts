import { Command } from '@nestjs/cqrs';

import { FileSchema } from '../../types';

interface SetServerCategoryCommandType {
  data: FileSchema;
  documentId: string;
  readme: string;
}

export class SetServerCategoryCommand extends Command<void> {
  public constructor(public readonly command: SetServerCategoryCommandType) {
    super();
  }
}
