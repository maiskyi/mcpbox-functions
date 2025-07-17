import { Injectable, Logger } from '@nestjs/common';
import { Octokit } from '@octokit/rest';

import { UtilsService } from '../utils';

import { GetRepoBySourceCodeUrlParams } from './github-client.types';

@Injectable()
export class GithubClientService extends Octokit {
  private readonly logger = new Logger(GithubClientService.name, {
    timestamp: true,
  });

  public constructor(private utils: UtilsService) {
    super();
  }

  public async getRepoBySourceCodeUrl({ url }: GetRepoBySourceCodeUrlParams) {
    try {
      const { owner, repo } = this.utils.parseSourceCodeUrl({
        url,
      });

      if (!owner || !repo) throw new Error('No source code owner or repo');

      const { data } = await this.repos.get({
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
