import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';
import { GithubClientService } from '@services/github';
import { OpenAIService } from '@services/openai';

import { UpdateServerOverviewSucceedEvent } from '../../events/update-server-overview-succeed';

import { UpdateServerOverviewCommand } from './update-server-overview.command';
import {
  SYSTEM_PROMPT,
  USER_PROMPT_1,
  USER_PROMPT_2,
  USER_PROMPT_3,
} from './update-server-overview.const';

@CommandHandler(UpdateServerOverviewCommand)
export class UpdateServerOverviewHandler
  implements ICommandHandler<UpdateServerOverviewCommand>
{
  private readonly logger = new Logger(UpdateServerOverviewHandler.name, {
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
  }: UpdateServerOverviewCommand) {
    try {
      const { data: readme } =
        await this.github.repos.reposGetReadmeBySourceCodeUrl({
          url: data.githubUrl,
        });

      const content = Buffer.from(readme.content, 'base64').toString('utf-8');

      const { choices } = await this.openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPT,
          },
          {
            role: 'user',
            content: USER_PROMPT_1,
          },
          {
            role: 'user',
            content: content,
          },
          {
            role: 'user',
            content: USER_PROMPT_2,
          },
          {
            role: 'user',
            content: USER_PROMPT_3,
          },
        ],
      });

      const server = await this.strapi.servers.update({
        documentId,
        data: {
          Overview: choices[0].message.content,
        },
      });

      if (!server.documentId) throw new Error('No documentId');

      this.eventBus.publish(
        new UpdateServerOverviewSucceedEvent({
          data,
          documentId,
        }),
      );
    } catch (error) {
      this.logger.error(error);
      //   this.eventBus.publish(
      //     new CheckingFilesToUploadFailedEvent({
      //       ...command,
      //       error,
      //     }),
      //   );
    }
  }
}
