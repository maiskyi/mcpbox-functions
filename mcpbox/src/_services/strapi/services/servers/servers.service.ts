import { Injectable, Logger } from '@nestjs/common';

import {
  CreateServer,
  CreateServerMutation,
  CreateServerMutationVariables,
  FindOneServer,
  FindOneServerQuery,
  FindOneServerQueryVariables,
  UpdateServer,
  UpdateServerMutation,
  UpdateServerMutationVariables,
} from '../../__generated__/query';
import { GqlClientService } from '../gql-client';

@Injectable()
export class ServersService {
  private readonly logger = new Logger(ServersService.name, {
    timestamp: true,
  });

  public constructor(private client: GqlClientService) {}

  public async create(variables: CreateServerMutationVariables) {
    try {
      const { data } = await this.client.mutate<
        CreateServerMutation,
        CreateServerMutationVariables
      >({
        variables,
        mutation: CreateServer,
      });

      if (!data?.createServer) throw new Error('No data');

      const { createServer } = data;

      return { ...createServer };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async findOne(variables: FindOneServerQueryVariables) {
    try {
      const {
        data: {
          servers: [server],
        },
      } = await this.client.query<
        FindOneServerQuery,
        FindOneServerQueryVariables
      >({
        variables,
        query: FindOneServer,
        fetchPolicy: 'no-cache',
      });

      return { server };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async update(variables: UpdateServerMutationVariables) {
    try {
      const { data } = await this.client.mutate<
        UpdateServerMutation,
        UpdateServerMutationVariables
      >({
        variables,
        mutation: UpdateServer,
      });

      if (!data) throw new Error('No data');

      const { updateServer } = data;

      return { ...updateServer };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
