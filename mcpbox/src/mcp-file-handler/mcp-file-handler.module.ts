import { Module } from '@nestjs/common';

// Sagas
import { CreateServerSaga } from './sagas/create-server';
// Services
import { McpFileHandlerService } from './services/mcp-file-handler';
// Events
import { NewServerFoundHandler } from './events/new-server-found';
import { CreateDraftServerSucceedHandler } from './events/create-draft-server-succeed';
// Commands
import { CreateDraftServerHandler } from './commands/create-draft-server';
import { UpdateServerOverviewHandler } from './commands/update-server-overview';

@Module({
  providers: [
    // Sagas
    CreateServerSaga,
    // Services
    McpFileHandlerService,
    // Events
    NewServerFoundHandler,
    CreateDraftServerSucceedHandler,
    // Commands
    CreateDraftServerHandler,
    UpdateServerOverviewHandler,
  ],
  exports: [McpFileHandlerService],
})
export class McpFileHandlerModule {}
