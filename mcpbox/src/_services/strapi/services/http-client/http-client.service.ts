import { Injectable } from '@nestjs/common';

import { HttpClient } from '../../__generated__/api/http-client';

import { HttpClientServiceConfig } from './http-client.types';

@Injectable()
export class HttpClientService<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  public constructor({ baseURL }: HttpClientServiceConfig) {
    super({
      baseURL,
    });
  }
}
