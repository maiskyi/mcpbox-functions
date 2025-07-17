import { Injectable, Logger } from '@nestjs/common';

import {
  FindManyServerCategories,
  FindManyServerCategoriesQuery,
  FindManyServerCategoriesQueryVariables,
} from '../../__generated__/query';
import { GqlClientService } from '../gql-client';

@Injectable()
export class ServerCategoriesService {
  private readonly logger = new Logger(ServerCategoriesService.name, {
    timestamp: true,
  });

  public constructor(private client: GqlClientService) {}

  public async findMany(variables: FindManyServerCategoriesQueryVariables) {
    try {
      const {
        data: { serverCategories },
      } = await this.client.query<
        FindManyServerCategoriesQuery,
        FindManyServerCategoriesQueryVariables
      >({
        variables,
        query: FindManyServerCategories,
      });

      return { serverCategories };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
