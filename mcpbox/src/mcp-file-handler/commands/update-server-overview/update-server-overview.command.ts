import { Command } from '@nestjs/cqrs';

import { FileSchema } from '../../types';

interface UpdateServerOverviewCommandType {
  data: FileSchema;
  documentId: string;
}

export class UpdateServerOverviewCommand extends Command<void> {
  public constructor(public readonly command: UpdateServerOverviewCommandType) {
    super();
  }
}
