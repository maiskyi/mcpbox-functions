import { Injectable } from '@nestjs/common';

import { HttpClient } from '../../__generated__/http-client';

@Injectable()
export class HttpClientService<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  public constructor() {
    super({
      baseURL: 'https://api.github.com',
    });
  }
}
