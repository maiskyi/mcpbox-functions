import { INestApplicationContext, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { FirebaseAdminModule } from '@services/firebase-admin';
import { FirebaseStorageModule } from '@services/firebase-storage';
import { StrapiModule } from '@services/strapi';
import { CqrsModule } from '@nestjs/cqrs';

import { McpFileHandlerModule } from './mcp-file-handler';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CqrsModule.forRoot(),
    // Services
    FirebaseAdminModule,
    FirebaseStorageModule.forRoot(),
    StrapiModule.forRoot({
      apiToken: process.env.STRAPI_API_TOKEN,
      schemaUrl: process.env.STRAPI_SCHEMA_URL,
    }),
    // Features
    McpFileHandlerModule,
  ],
})
class AppModule {}

export class HandlersModule {
  private static _app: INestApplicationContext;

  public static async getApp(): Promise<INestApplicationContext> {
    if (!this._app) {
      this._app = await NestFactory.createApplicationContext(AppModule);
    }
    return this._app;
  }
}
