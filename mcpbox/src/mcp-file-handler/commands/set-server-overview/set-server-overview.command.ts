import { Command } from '@nestjs/cqrs';

import { FileSchema } from '../../types';

interface SetServerOverviewCommandType {
  data: FileSchema;
  documentId: string;
  readme: string;
}

export class SetServerOverviewCommand extends Command<void> {
  public constructor(public readonly command: SetServerOverviewCommandType) {
    super();
  }
}
