import { Injectable } from '@nestjs/common';

import {
  CreateServer,
  CreateServerMutation,
  CreateServerMutationVariables,
} from '../../__generated__/query';
import { GqlClientService } from '../gql-client';

@Injectable()
export class ServersService {
  public constructor(private client: GqlClientService) {}

  public async create(variables: CreateServerMutationVariables) {
    const { data } = await this.client.mutate<
      CreateServerMutation,
      CreateServerMutationVariables
    >({
      variables,
      mutation: CreateServer,
    });

    if (!data) throw new Error('No data');

    const { createServer } = data;

    return { ...createServer };
  }
}
