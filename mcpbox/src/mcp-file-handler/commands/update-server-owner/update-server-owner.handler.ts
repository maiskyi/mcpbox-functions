import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';
import { GithubClientService } from '@services/github';

import { UpdateServerOwnerSucceedEvent } from '../../events/update-server-owner-succeed';

import { UpdateServerOwnerCommand } from './update-server-owner.command';

@CommandHandler(UpdateServerOwnerCommand)
export class UpdateServerOwnerHandler
  implements ICommandHandler<UpdateServerOwnerCommand>
{
  private readonly logger = new Logger(UpdateServerOwnerHandler.name, {
    timestamp: true,
  });

  public constructor(
    private eventBus: EventBus,
    private strapi: StrapiClientService,
    private github: GithubClientService,
  ) {}

  public async execute({
    command: { data, documentId },
  }: UpdateServerOwnerCommand) {
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
        new UpdateServerOwnerSucceedEvent({
          data,
          documentId,
        }),
      );
    } catch (error) {
      this.logger.error(error);
    }
  }
}
