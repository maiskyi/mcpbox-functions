import { Injectable, Logger } from '@nestjs/common';
import {
  StorageEvent,
  FirebaseStorageService,
} from '@services/firebase-storage';

import { fileSchema } from '../../schemas';

@Injectable()
export class McpFileHandlerService {
  private logger = new Logger(McpFileHandlerService.name, {
    timestamp: true,
  });

  public constructor(private storage: FirebaseStorageService) {}

  public async handleStorageEvent({
    data: { bucket, name, contentType },
  }: StorageEvent) {
    try {
      if (!name) throw new Error('No file path');

      if (contentType !== 'application/json')
        throw new Error('File is not JSON');

      const { buffer } = await this.storage.readFile({
        bucket,
        name,
      });

      const content = buffer.toString();

      const json = JSON.parse(content);

      const { data, error } = await fileSchema.safeParseAsync(json);

      if (error) throw error;

      if (!data) throw new Error('File Schema: No data');

      console.log({
        data,
      });
    } catch (error) {
      this.logger.error(error);
    }
  }
}
