import { INestApplicationContext, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FirebaseAdminModule } from '@services/firebase-admin';

import { McpFileHandlerModule } from './mcp-file-handler';

@Module({
  imports: [
    // Services
    FirebaseAdminModule,
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
