import { Injectable, Logger } from '@nestjs/common';
import {
  StorageEvent,
  FirebaseStorageService,
} from '@services/firebase-storage';

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

      console.log(json);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
