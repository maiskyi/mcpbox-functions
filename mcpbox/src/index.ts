import { onObjectFinalized } from 'firebase-functions/v2/storage';

export const handleOnMcpFileCreatedUpdated = onObjectFinalized((t) => {
  console.log(t);
});
