import { onObjectFinalized } from 'firebase-functions/v2/storage';
import { defineSecret } from 'firebase-functions/params';

import { HandlersModule } from './app.module';
import { McpFileHandlerService } from './mcp-file-handler';

export const strapiApiToken = defineSecret('STRAPI_API_TOKEN');

export const strapiSchemaUrl = defineSecret('STRAPI_SCHEMA_URL');

export const strapiBaseUrl = defineSecret('STRAPI_BASE_URL');

export const openaiApiKey = defineSecret('OPENAI_API_KEY');

export const handleOnMcpFileCreatedUpdated = onObjectFinalized(
  {
    secrets: [strapiApiToken, strapiSchemaUrl, openaiApiKey, strapiBaseUrl],
  },
  async (event) => {
    const app = await HandlersModule.getApp({
      strapiApiToken: strapiApiToken.value(),
      strapiSchemaUrl: strapiSchemaUrl.value(),
      openaiApiKey: openaiApiKey.value(),
      strapiBaseUrl: strapiBaseUrl.value(),
    });
    const service = app.get(McpFileHandlerService);
    await service.handleStorageEvent(event);
  },
);
