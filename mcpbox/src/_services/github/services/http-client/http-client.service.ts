import { Injectable } from '@nestjs/common';

import { HttpClient } from '../../__generated__/http-client';

import { HttpClientConfig } from './http-client.types';

@Injectable()
export class HttpClientService<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  public constructor({ apiToken = [] }: HttpClientConfig) {
    const [token] = apiToken;

    super({
      baseURL: 'https://api.github.com',
      timeout: 120000,
      headers: {
        ...(token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : {}),
      },
    });
  }
}
