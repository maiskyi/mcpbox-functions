import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';
import { GithubClientService } from '@services/github';
import { OpenAIService } from '@services/openai';

import { GetServerReadmeSucceedEvent } from '../../events/get-server-readme-succeed';

import { GetServerReadmeCommand } from './get-server-readme.command';

@CommandHandler(GetServerReadmeCommand)
export class GetServerReadmeHandler
  implements ICommandHandler<GetServerReadmeCommand>
{
  private readonly logger = new Logger(GetServerReadmeHandler.name, {
    timestamp: true,
  });

  public constructor(
    private eventBus: EventBus,
    private strapi: StrapiClientService,
    private github: GithubClientService,
    private openai: OpenAIService,
  ) {}

  public async execute({
    command: { data, documentId },
  }: GetServerReadmeCommand) {
    try {
      const { data: doc } =
        await this.github.repos.reposGetReadmeBySourceCodeUrl({
          url: data.githubUrl,
        });

      const readme = Buffer.from(doc.content, 'base64').toString('utf-8');

      this.eventBus.publish(
        new GetServerReadmeSucceedEvent({
          data,
          readme,
          documentId,
        }),
      );
    } catch (error) {
      this.logger.error(error);
    }
  }
}
