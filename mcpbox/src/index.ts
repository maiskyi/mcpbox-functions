import { onObjectFinalized } from 'firebase-functions/v2/storage';
import { defineSecret } from 'firebase-functions/params';

import { HandlersModule } from './app.module';
import { McpFileHandlerService } from './mcp-file-handler';

const strapiApiToken = defineSecret('STRAPI_API_TOKEN');

const strapiSchemaUrl = defineSecret('STRAPI_GRAPHQL_SCHEMA_URL');

const strapiBaseUrl = defineSecret('STRAPI_API_BASE_URL');

const openaiApiKey = defineSecret('OPENAI_API_KEY');

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
