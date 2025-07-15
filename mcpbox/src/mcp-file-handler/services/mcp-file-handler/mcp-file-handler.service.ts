import { Injectable, Logger } from '@nestjs/common';
import {
  StorageEvent,
  FirebaseStorageService,
} from '@services/firebase-storage';
import { StrapiClientService } from '@services/strapi';

import { fileSchema } from '../../schemas';
import { FileSchema } from '../../types';

@Injectable()
export class McpFileHandlerService {
  private logger = new Logger(McpFileHandlerService.name, {
    timestamp: true,
  });

  public constructor(
    private storage: FirebaseStorageService,
    private strapi: StrapiClientService,
  ) {}

  private async createStrapiServer(data: FileSchema) {
    const { documentId } = await this.strapi.servers.create({
      data: {
        Title: data.title,
        Description: data.description,
        GitHubUrl: data.githubUrl,
        IsOfficial: data.isOfficial,
        Tools: JSON.stringify(data.tools),
      },
    });

    return { documentId };
  }

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

      const { documentId } = await this.createStrapiServer(data);

      console.log(documentId);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
