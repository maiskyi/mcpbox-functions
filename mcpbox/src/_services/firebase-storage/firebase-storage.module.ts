import { DynamicModule, Module } from '@nestjs/common';
import { getStorage } from 'firebase-admin/storage';

import { StorageService } from './services/storage';
import { FirebaseStorageService } from './services/firebase-storage';

@Module({
  providers: [FirebaseStorageService],
  exports: [FirebaseStorageService],
})
export class FirebaseStorageModule {
  public static forRoot(): DynamicModule {
    return {
      global: true,
      module: FirebaseStorageModule,
      providers: [
        {
          provide: StorageService,
          useFactory: () => getStorage(),
        },
      ],
    };
  }
}
