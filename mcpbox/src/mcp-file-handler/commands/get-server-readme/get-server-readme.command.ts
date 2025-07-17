import { Command } from '@nestjs/cqrs';

import { FileSchema } from '../../types';

interface GetServerReadmeCommandType {
  data: FileSchema;
  documentId: string;
}

export class GetServerReadmeCommand extends Command<void> {
  public constructor(public readonly command: GetServerReadmeCommandType) {
    super();
  }
}
