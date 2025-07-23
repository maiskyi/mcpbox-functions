import { DynamicModule, Module } from '@nestjs/common';

import { GithubClientService } from './services/github-client';
import { UtilsService } from './services/utils';
import { HttpClientService, HttpClientConfig } from './services/http-client';
import { ReposService } from './services/repos';

@Module({
  providers: [
    HttpClientService,
    GithubClientService,
    UtilsService,
    ReposService,
  ],
  exports: [GithubClientService],
})
export class GithubModule {
  public static forRoot({ apiToken }: HttpClientConfig): DynamicModule {
    return {
      global: true,
      module: GithubModule,
      providers: [
        {
          provide: HttpClientService,
          useValue: new HttpClientService({
            apiToken,
          }),
        },
      ],
    };
  }
}
