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
import { UpdateServerCategorySucceedHandler } from './events/update-server-category-succeed';
// Commands
import { CreateDraftServerHandler } from './commands/create-draft-server';
import { UpdateServerOverviewHandler } from './commands/update-server-overview';
import { UpdateServerOwnerHandler } from './commands/update-server-owner';
import { UpdateServerCategoryHandler } from './commands/update-server-category';
import { PublishServerHandler } from './commands/publish-server';

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
    UpdateServerCategorySucceedHandler,
    // Commands
    CreateDraftServerHandler,
    UpdateServerOverviewHandler,
    UpdateServerOwnerHandler,
    UpdateServerCategoryHandler,
    PublishServerHandler,
  ],
  exports: [McpFileHandlerService],
})
export class McpFileHandlerModule {}
