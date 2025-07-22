import { Injectable, Logger } from '@nestjs/common';

import { Repos } from '../../__generated__/Repos';
import { UtilsService } from '../utils';
import { HttpClientService } from '../http-client';

import {
  ReposGetBySourceCodeUrlParams,
  ReposGetReadmeBySourceCodeUrl,
} from './repos.types';

@Injectable()
export class ReposService extends Repos {
  private readonly logger = new Logger(ReposService.name, {
    timestamp: true,
  });

  public constructor(
    private utils: UtilsService,
    client: HttpClientService,
  ) {
    super(client);
  }

  public async reposGetBySourceCodeUrl({ url }: ReposGetBySourceCodeUrlParams) {
    try {
      const { owner, repo } = this.utils.parseSourceCodeUrl({
        url,
      });

      if (!owner || !repo) throw new Error('No source code owner or repo');

      const data = await this.reposGet(owner, repo);

      return { data };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async reposGetReadmeBySourceCodeUrl({
    url,
  }: ReposGetReadmeBySourceCodeUrl) {
    try {
      const {
        owner,
        repo,
        branch: _b,
        path: _p,
      } = this.utils.parseSourceCodeUrl({
        url,
      });

      if (!owner || !repo) throw new Error('No source code owner or repo');

      const data = await this.reposGetReadme({
        owner,
        repo,
      });

      return { data };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
