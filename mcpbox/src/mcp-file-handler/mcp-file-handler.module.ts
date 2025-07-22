import { Module } from '@nestjs/common';

// Sagas
import { CreateServerSaga } from './sagas/create-server';
// Services
import { McpFileHandlerService } from './services/mcp-file-handler';
// Events
import { NewServerFoundHandler } from './events/new-server-found';
import { CreateDraftServerSucceedHandler } from './events/create-draft-server-succeed';
import { SetServerOverviewSucceedHandler } from './events/set-server-overview-succeed';
import { SetServerOwnerSucceedHandler } from './events/set-server-owner-succeed';
import { SetServerCategorySucceedHandler } from './events/set-server-category-succeed';
import { PublishServerSucceedHandler } from './events/publish-server-succeed';
import { GetServerReadmeSucceedHandler } from './events/get-server-readme-succeed';
import { SetServerLogoSucceedHandler } from './events/set-server-logo-succeed';
import { SetServerPartitionFailedHandler } from './events/set-server-partition-failed';
import { DeleteDraftServerSucceedHandler } from './events/delete-draft-server-succeed';
// Commands
import { CreateDraftServerHandler } from './commands/create-draft-server';
import { SetServerOverviewHandler } from './commands/set-server-overview';
import { SetServerOwnerHandler } from './commands/set-server-owner';
import { SetServerCategoryHandler } from './commands/set-server-category';
import { PublishServerHandler } from './commands/publish-server';
import { GetServerReadmeHandler } from './commands/get-server-readme';
import { SetServerLogoHandler } from './commands/set-server-logo';
import { DeleteDraftServerHandler } from './commands/delete-draft-server';

@Module({
  providers: [
    // Sagas
    CreateServerSaga,
    // Services
    McpFileHandlerService,
    // Events
    NewServerFoundHandler,
    CreateDraftServerSucceedHandler,
    SetServerOverviewSucceedHandler,
    SetServerOwnerSucceedHandler,
    SetServerCategorySucceedHandler,
    PublishServerSucceedHandler,
    GetServerReadmeSucceedHandler,
    SetServerLogoSucceedHandler,
    SetServerPartitionFailedHandler,
    DeleteDraftServerSucceedHandler,
    // Commands
    CreateDraftServerHandler,
    SetServerOverviewHandler,
    SetServerOwnerHandler,
    SetServerCategoryHandler,
    PublishServerHandler,
    GetServerReadmeHandler,
    SetServerLogoHandler,
    DeleteDraftServerHandler,
  ],
  exports: [McpFileHandlerService],
})
export class McpFileHandlerModule {}
