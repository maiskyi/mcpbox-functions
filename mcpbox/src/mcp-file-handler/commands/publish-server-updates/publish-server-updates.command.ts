import { Command } from '@nestjs/cqrs';

import { FileSchema } from '../../types';

interface PublishServerUpdatesCommandType {
  data: FileSchema;
  documentId: string;
}

export class PublishServerUpdatesCommand extends Command<void> {
  public constructor(public readonly command: PublishServerUpdatesCommandType) {
    super();
  }
}
