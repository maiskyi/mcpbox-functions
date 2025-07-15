import { Module } from '@nestjs/common';

import { McpFileHandlerService } from './services/mcp-file-handler';

@Module({
  providers: [McpFileHandlerService],
  exports: [McpFileHandlerService],
})
export class McpFileHandlerModule {}
