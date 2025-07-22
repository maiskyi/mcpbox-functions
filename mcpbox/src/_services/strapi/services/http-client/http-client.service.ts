import { Injectable } from '@nestjs/common';

import { HttpClient } from '../../__generated__/api/http-client';

import { HttpClientServiceConfig } from './http-client.types';

@Injectable()
export class HttpClientService<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  public constructor({ baseURL, apiToken }: HttpClientServiceConfig) {
    super({
      baseURL,
      timeout: 120000,
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });
  }
}
