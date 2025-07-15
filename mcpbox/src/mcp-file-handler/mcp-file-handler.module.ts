import { Module } from '@nestjs/common';
import { StrapiModule } from '@services/strapi';
import { GcStorageModule } from '@services/gc-storage';

@Module({
  imports: [StrapiModule, GcStorageModule],
})
export class McpFileHandlerModule {}
