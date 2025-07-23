import { Injectable, Logger } from '@nestjs/common';
import {
  StorageEvent,
  FirebaseStorageService,
} from '@services/firebase-storage';
import { StrapiClientService } from '@services/strapi';
import { EventBus } from '@nestjs/cqrs';

import { fileSchema } from '../../schemas';
import { NewServerFoundEvent } from '../../events/new-server-found';
import { ExistingServerFoundEvent } from '../../events/existing-server-found';

@Injectable()
export class McpFileHandlerService {
  private logger = new Logger(McpFileHandlerService.name, {
    timestamp: true,
  });

  public constructor(
    private storage: FirebaseStorageService,
    private strapi: StrapiClientService,
    private eventBus: EventBus,
  ) {}

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

      const { server } = await this.strapi.servers.findOne({
        filters: {
          GitHubUrl: {
            eq: data.githubUrl,
          },
        },
      });

      if (!server) {
        this.eventBus.publish(
          new NewServerFoundEvent({
            data,
          }),
        );
        return;
      }

      this.eventBus.publish(
        new ExistingServerFoundEvent({
          data,
          documentId: server.documentId,
        }),
      );
    } catch (error) {
      this.logger.error(error);
    }
  }
}
