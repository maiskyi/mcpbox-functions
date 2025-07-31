import { Module } from '@nestjs/common';

// Sagas
import { CreateServerSaga } from './sagas/create-server';
import { UpdateServerSaga } from './sagas/update-server';
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
import { ExistingServerFoundHandler } from './events/existing-server-found';
import { UpdateServerToolsSettingsSucceedHandler } from './events/update-server-tools-settings-succeed';
import { UpdateServerPartitionFailedHandler } from './events/update-server-partition-failed';
import { PublishServerUpdatesSucceedHandler } from './events/publish-server-updates-succeed';
// Commands
import { CreateDraftServerHandler } from './commands/create-draft-server';
import { SetServerOverviewHandler } from './commands/set-server-overview';
import { SetServerOwnerHandler } from './commands/set-server-owner';
import { SetServerCategoryHandler } from './commands/set-server-category';
import { PublishServerHandler } from './commands/publish-server';
import { GetServerReadmeHandler } from './commands/get-server-readme';
import { SetServerLogoHandler } from './commands/set-server-logo';
import { DeleteDraftServerHandler } from './commands/delete-draft-server';
import { UpdateServerToolsSettingsHandler } from './commands/update-server-tools-settings';
import { PublishServerUpdatesHandler } from './commands/publish-server-updates';

@Module({
  providers: [
    // Sagas
    CreateServerSaga,
    UpdateServerSaga,
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
    ExistingServerFoundHandler,
    UpdateServerToolsSettingsSucceedHandler,
    UpdateServerPartitionFailedHandler,
    PublishServerUpdatesSucceedHandler,
    // Commands
    CreateDraftServerHandler,
    SetServerOverviewHandler,
    SetServerOwnerHandler,
    SetServerCategoryHandler,
    PublishServerHandler,
    GetServerReadmeHandler,
    SetServerLogoHandler,
    DeleteDraftServerHandler,
    UpdateServerToolsSettingsHandler,
    PublishServerUpdatesHandler,
  ],
  exports: [McpFileHandlerService],
})
export class McpFileHandlerModule {}
