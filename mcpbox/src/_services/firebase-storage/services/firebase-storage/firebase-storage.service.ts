import { Injectable, Logger } from '@nestjs/common';

import { StorageService } from '../storage';

import { ReadFileParams } from './firebase-storage.types';

@Injectable()
export class FirebaseStorageService {
  private logger = new Logger(FirebaseStorageService.name, {
    timestamp: true,
  });

  public constructor(private storage: StorageService) {}

  public async readFile({ bucket, name }: ReadFileParams) {
    try {
      const file = this.storage.bucket(bucket).file(name);
      const [buffer] = await file.download();
      return { buffer };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
