import { Module, OnModuleInit } from '@nestjs/common';
import { initializeApp } from 'firebase-admin/app';

initializeApp();

@Module({})
export class FirebaseAdminModule implements OnModuleInit {
  public onModuleInit() {}
}
