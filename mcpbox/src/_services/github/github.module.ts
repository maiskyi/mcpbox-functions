import { Module } from '@nestjs/common';

import { GithubClientService } from './services/github-client';
import { UtilsService } from './services/utils';

@Module({
  providers: [GithubClientService, UtilsService],
  exports: [GithubClientService],
})
export class GithubModule {}
