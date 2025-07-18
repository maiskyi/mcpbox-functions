import { Injectable } from '@nestjs/common';

import { Upload } from '../../__generated__/api/Upload';
import { HttpClientService } from '../http-client';

@Injectable()
export class UploadService extends Upload {
  public constructor(client: HttpClientService) {
    super(client);
  }
}
