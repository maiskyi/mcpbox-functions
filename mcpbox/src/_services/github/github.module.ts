import { DynamicModule, Module } from '@nestjs/common';

import { GithubClientService } from './services/github-client';
import { UtilsService } from './services/utils';

@Module({
  providers: [GithubClientService, UtilsService],
  exports: [GithubClientService],
})
export class GithubModule {
  public static forRootAsync(): DynamicModule {
    return {
      global: true,
      module: GithubModule,
      providers: [
        {
          provide: 'OCTOKIT',
          useFactory: async () => {
            const module = await import('@octokit/rest');
            return new module.Octokit({ auth: process.env.GITHUB_TOKEN });
          },
        },
      ],
    };
  }
}
