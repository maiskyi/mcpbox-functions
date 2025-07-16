import { Injectable } from '@nestjs/common';

import { ServersService } from '../servers';

@Injectable()
export class StrapiClientService {
  public constructor(public servers: ServersService) {}
}
