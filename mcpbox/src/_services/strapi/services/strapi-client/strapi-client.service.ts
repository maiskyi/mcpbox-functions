import { Injectable } from '@nestjs/common';

import { ServersService } from '../servers';
import { ServerCategoriesService } from '../server-categories';

@Injectable()
export class StrapiClientService {
  public constructor(
    public servers: ServersService,
    public serverCategories: ServerCategoriesService,
  ) {}
}
