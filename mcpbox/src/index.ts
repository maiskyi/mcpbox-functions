import { onObjectFinalized } from 'firebase-functions/v2/storage';
import { defineSecret } from 'firebase-functions/params';
import { NestFactory } from '@nestjs/core';

import { McpFileHandlerService } from './mcp-file-handler';
import { AppModule } from './app.module';

const strapiApiToken = defineSecret('STRAPI_API_TOKEN');

const strapiSchemaUrl = defineSecret('STRAPI_GRAPHQL_SCHEMA_URL');

const strapiBaseUrl = defineSecret('STRAPI_API_BASE_URL');

const openaiApiKey = defineSecret('OPENAI_API_KEY');

const githubApiToken = defineSecret('GITHUB_API_TOKEN');

export const handleOnMcpFileCreatedUpdated = onObjectFinalized(
  {
    secrets: [
      strapiApiToken,
      strapiSchemaUrl,
      openaiApiKey,
      strapiBaseUrl,
      githubApiToken,
    ],
  },
  async (event) => {
    const app = await NestFactory.createApplicationContext(
      AppModule.forRoot({
        strapiApiToken: strapiApiToken.value(),
        strapiSchemaUrl: strapiSchemaUrl.value(),
        openaiApiKey: openaiApiKey.value(),
        strapiBaseUrl: strapiBaseUrl.value(),
        githubApiToken: githubApiToken.value().split(','),
      }),
    );

    const service = app.get(McpFileHandlerService);
    await service.handleStorageEvent(event);
  },
);
