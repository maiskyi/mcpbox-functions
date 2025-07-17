import { Injectable } from '@nestjs/common';

import { ReposService } from '../repos';

@Injectable()
export class GithubClientService {
  public constructor(public repos: ReposService) {}
}
