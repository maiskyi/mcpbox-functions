import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FirebaseAdminModule } from '@services/firebase-admin';
import { FirebaseStorageModule } from '@services/firebase-storage';
import { StrapiModule } from '@services/strapi';
import { CqrsModule } from '@nestjs/cqrs';
import { GithubModule } from '@services/github';
import { OpenAIModule } from '@services/openai';

import { McpFileHandlerModule } from './mcp-file-handler';
import { AppConfig } from './app.types';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CqrsModule.forRoot(),
    // Services
    FirebaseAdminModule,
    FirebaseStorageModule.forRoot(),
    // Features
    McpFileHandlerModule,
  ],
})
export class AppModule {
  public static forRoot({
    strapiApiToken,
    strapiSchemaUrl,
    openaiApiKey,
    strapiBaseUrl,
    githubApiToken,
  }: AppConfig): DynamicModule {
    return {
      global: true,
      module: AppModule,
      imports: [
        GithubModule.forRoot({
          apiToken: githubApiToken,
        }),
        OpenAIModule.forRoot({
          apiKey: openaiApiKey,
        }),
        StrapiModule.forRoot({
          apiToken: strapiApiToken,
          schemaUrl: strapiSchemaUrl,
          baseUrl: strapiBaseUrl,
        }),
      ],
    };
  }
}
