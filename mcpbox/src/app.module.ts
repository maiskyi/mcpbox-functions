import { INestApplicationContext } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { McpFileHandlerModule } from './mcp-file-handler';

export class AppModule {
  private static _mcpFileHandlerApp: INestApplicationContext;

  public static async getMcpFileHandlerApp(): Promise<INestApplicationContext> {
    if (!this._mcpFileHandlerApp) {
      this._mcpFileHandlerApp =
        await NestFactory.createApplicationContext(McpFileHandlerModule);
    }
    return this._mcpFileHandlerApp;
  }
}
