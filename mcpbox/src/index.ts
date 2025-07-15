import { onObjectFinalized } from 'firebase-functions/v2/storage';

import { HandlersModule } from './app.module';
import { McpFileHandlerService } from './mcp-file-handler';

export const handleOnMcpFileCreatedUpdated = onObjectFinalized(async (t) => {
  const app = await HandlersModule.getApp();
  const service = app.get(McpFileHandlerService);
  console.log({ service, t });
});
