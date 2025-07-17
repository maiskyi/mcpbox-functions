import { onObjectFinalized } from 'firebase-functions/v2/storage';

import { HandlersModule } from './app.module';
import { McpFileHandlerService } from './mcp-file-handler';
import { strapiApiToken, strapiSchemaUrl } from './secrets';

export const handleOnMcpFileCreatedUpdated = onObjectFinalized(
  {
    secrets: [strapiApiToken, strapiSchemaUrl],
  },
  async (event) => {
    const app = await HandlersModule.getApp({
      strapiApiToken: strapiApiToken.value(),
      strapiSchemaUrl: strapiSchemaUrl.value(),
    });
    const service = app.get(McpFileHandlerService);
    await service.handleStorageEvent(event);
  },
);
