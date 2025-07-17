import { Injectable } from '@nestjs/common';

import { ParseSourceCodeUrlParams } from './utils.types';

@Injectable()
export class UtilsService {
  public parseSourceCodeUrl({ url }: ParseSourceCodeUrlParams) {
    const match = url.match(
      /^https:\/\/github\.com\/([^/]+)\/([^/]+)(?:\/tree\/([^/]+)\/(.+))?$/,
    );

    if (!match) throw new Error('Invalid GitHub url');

    const [, owner, repo, branch, path] = match;

    return {
      owner,
      repo,
      branch,
      path,
    };
  }
}
