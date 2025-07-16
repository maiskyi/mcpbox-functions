import { Module } from '@nestjs/common';

// Sagas
import { CreateServerSaga } from './sagas/create-server';
// Services
import { McpFileHandlerService } from './services/mcp-file-handler';
// Events
import { NewServerFoundHandler } from './events/new-server-found';
import { CreateDraftServerSucceedHandler } from './events/create-draft-server-succeed';
import { UpdateServerOverviewSucceedHandler } from './events/update-server-overview-succeed';
import { UpdateServerOwnerSucceedHandler } from './events/update-server-owner-succeed';
// Commands
import { CreateDraftServerHandler } from './commands/create-draft-server';
import { UpdateServerOverviewHandler } from './commands/update-server-overview';
import { UpdateServerOwnerHandler } from './commands/update-server-owner';

@Module({
  providers: [
    // Sagas
    CreateServerSaga,
    // Services
    McpFileHandlerService,
    // Events
    NewServerFoundHandler,
    CreateDraftServerSucceedHandler,
    UpdateServerOverviewSucceedHandler,
    UpdateServerOwnerSucceedHandler,
    // Commands
    CreateDraftServerHandler,
    UpdateServerOverviewHandler,
    UpdateServerOwnerHandler,
  ],
  exports: [McpFileHandlerService],
})
export class McpFileHandlerModule {}
