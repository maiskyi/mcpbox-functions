import { Injectable } from '@nestjs/common';

import { ServersService } from '../servers';
import { ServerCategoriesService } from '../server-categories';
import { UploadService } from '../upload';

@Injectable()
export class StrapiClientService {
  public constructor(
    public servers: ServersService,
    public serverCategories: ServerCategoriesService,
    public upload: UploadService,
  ) {}
}
