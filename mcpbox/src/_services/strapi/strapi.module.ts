import { DynamicModule, Module } from '@nestjs/common';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from '@apollo/client/link/http';

import { StrapiModuleConfig } from './strapi.types';
import { GqlClientService } from './services/gql-client';
import { StrapiClientService } from './services/strapi-client';
import { ServersService } from './services/servers';
import { ServerCategoriesService } from './services/server-categories';
import { HttpClientService } from './services/http-client';
import { UploadService } from './services/upload';

@Module({
  providers: [
    StrapiClientService,
    ServersService,
    ServerCategoriesService,
    UploadService,
  ],
  exports: [StrapiClientService],
})
export class StrapiModule {
  public static forRoot({
    schemaUrl,
    apiToken,
    baseUrl,
  }: StrapiModuleConfig): DynamicModule {
    return {
      global: true,
      module: StrapiModule,
      providers: [
        {
          provide: HttpClientService,
          useValue: new HttpClientService({
            apiToken,
            baseURL: baseUrl,
          }),
        },
        {
          provide: GqlClientService,
          useValue: new GqlClientService({
            link: new HttpLink({
              uri: schemaUrl,
              fetch,
              headers: {
                Authorization: `Bearer ${apiToken}`,
              },
            }),
            cache: new InMemoryCache({}),
          }),
        },
      ],
    };
  }
}
