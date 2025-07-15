import { Module } from '@nestjs/common';

// Sagas
import { CreateServerSaga } from './sagas/create-server';
// Services
import { McpFileHandlerService } from './services/mcp-file-handler';
// Events
import { NewServerFoundHandler } from './events/new-server-found';
// Commands
import { CreateDraftServerHandler } from './commands/create-draft-server';

@Module({
  providers: [
    // Sagas
    CreateServerSaga,
    // Services
    McpFileHandlerService,
    // Events
    NewServerFoundHandler,
    // Commands
    CreateDraftServerHandler,
  ],
  exports: [McpFileHandlerService],
})
export class McpFileHandlerModule {}
