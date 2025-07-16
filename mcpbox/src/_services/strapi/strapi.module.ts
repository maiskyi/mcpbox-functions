import { DynamicModule, Module } from '@nestjs/common';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from '@apollo/client/link/http';

import { StrapiModuleConfig } from './strapi.types';
import { GqlClientService } from './services/gql-client';
import { StrapiClientService } from './services/strapi-client';
import { ServersService } from './services/servers';

@Module({
  providers: [StrapiClientService, ServersService],
  exports: [StrapiClientService],
})
export class StrapiModule {
  public static forRoot({
    schemaUrl,
    apiToken,
  }: StrapiModuleConfig): DynamicModule {
    return {
      global: true,
      module: StrapiModule,
      providers: [
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
            cache: new InMemoryCache({
              resultCaching: false,
            }),
          }),
        },
      ],
    };
  }
}
