import { DynamicModule, INestApplicationContext, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { FirebaseAdminModule } from '@services/firebase-admin';
import { FirebaseStorageModule } from '@services/firebase-storage';
import { StrapiModule } from '@services/strapi';
import { CqrsModule } from '@nestjs/cqrs';

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
class AppModule {
  public static forRoot({
    strapiApiToken,
    strapiSchemaUrl,
  }: AppConfig): DynamicModule {
    return {
      global: true,
      module: AppModule,
      imports: [
        StrapiModule.forRoot({
          apiToken: strapiApiToken,
          schemaUrl: strapiSchemaUrl,
        }),
      ],
    };
  }
}

export class HandlersModule {
  private static _app: INestApplicationContext;

  public static async getApp(
    config: AppConfig,
  ): Promise<INestApplicationContext> {
    if (!this._app) {
      this._app = await NestFactory.createApplicationContext(
        AppModule.forRoot(config),
      );
    }
    return this._app;
  }
}
