import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';
import { GithubClientService } from '@services/github';

import { SetServerOwnerSucceedEvent } from '../../events/set-server-owner-succeed';

import { SetServerOwnerCommand } from './set-server-owner.command';

@CommandHandler(SetServerOwnerCommand)
export class SetServerOwnerHandler
  implements ICommandHandler<SetServerOwnerCommand>
{
  private readonly logger = new Logger(SetServerOwnerHandler.name, {
    timestamp: true,
  });

  public constructor(
    private eventBus: EventBus,
    private strapi: StrapiClientService,
    private github: GithubClientService,
  ) {}

  public async execute({
    command: { data, documentId },
  }: SetServerOwnerCommand) {
    try {
      const { data: repo } = await this.github.repos.reposGetBySourceCodeUrl({
        url: data.githubUrl,
      });

      const server = await this.strapi.servers.update({
        documentId,
        data: {
          GitHubOwner: repo.owner.login,
        },
      });

      if (!server.documentId) throw new Error('No documentId');

      this.eventBus.publish(
        new SetServerOwnerSucceedEvent({
          data,
          documentId,
        }),
      );
    } catch (error) {
      this.logger.error(error);
    }
  }
}
