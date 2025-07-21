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
import { PublishServerSucceedHandler } from './events/publish-server-succeed';
import { GetServerReadmeSucceedHandler } from './events/get-server-readme-succeed';
import { UpdateServerLogoSucceedHandler } from './events/update-server-logo-succeed';
// Commands
import { CreateDraftServerHandler } from './commands/create-draft-server';
import { UpdateServerOverviewHandler } from './commands/update-server-overview';
import { UpdateServerOwnerHandler } from './commands/update-server-owner';
import { UpdateServerCategoryHandler } from './commands/update-server-category';
import { PublishServerHandler } from './commands/publish-server';
import { GetServerReadmeHandler } from './commands/get-server-readme';
import { UpdateServerLogoHandler } from './commands/update-server-logo';

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
    PublishServerSucceedHandler,
    GetServerReadmeSucceedHandler,
    UpdateServerLogoSucceedHandler,
    // Commands
    CreateDraftServerHandler,
    UpdateServerOverviewHandler,
    UpdateServerOwnerHandler,
    UpdateServerCategoryHandler,
    PublishServerHandler,
    GetServerReadmeHandler,
    UpdateServerLogoHandler,
  ],
  exports: [McpFileHandlerService],
})
export class McpFileHandlerModule {}
