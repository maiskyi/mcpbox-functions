import { Inject, Injectable, Logger } from '@nestjs/common';

import { UtilsService } from '../utils';

import { GetRepoBySourceCodeUrlParams } from './github-client.types';

import type { Octokit } from '@octokit/rest';

@Injectable()
export class GithubClientService {
  private readonly logger = new Logger(GithubClientService.name, {
    timestamp: true,
  });

  public constructor(
    @Inject('OCTOKIT') public octokit: Octokit,
    private utils: UtilsService,
  ) {}

  public async getRepoBySourceCodeUrl({ url }: GetRepoBySourceCodeUrlParams) {
    try {
      const { owner, repo } = UtilsService.parseSourceCodeUrl({
        url,
      });

      if (!owner || !repo) throw new Error('No source code owner or repo');

      const { data } = await this.octokit.rest.repos.get({
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
