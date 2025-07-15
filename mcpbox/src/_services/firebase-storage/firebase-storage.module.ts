import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class FirebaseStorageModule {
  public static forRoot(): DynamicModule {
    return {
      global: true,
      module: FirebaseStorageModule,
    };
  }
}
