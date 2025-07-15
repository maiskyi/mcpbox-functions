import { onObjectFinalized } from 'firebase-functions/v2/storage';

import { AppModule } from './app.module';

export const handleOnMcpFileCreatedUpdated = onObjectFinalized(async (t) => {
  const app = await AppModule.getMcpFileHandlerApp();
  console.log({ app, t });
});
