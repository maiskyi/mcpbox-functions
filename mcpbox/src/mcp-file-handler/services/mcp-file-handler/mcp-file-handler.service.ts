import { Injectable } from '@nestjs/common';
import { StorageEvent } from '@services/firebase-storage';

@Injectable()
export class McpFileHandlerService {
  public handleStorageEvent(event: StorageEvent) {
    console.log(event);
  }
}
