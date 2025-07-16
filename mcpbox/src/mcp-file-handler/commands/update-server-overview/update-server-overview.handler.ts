import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';

import { UpdateServerOverviewCommand } from './update-server-overview.command';

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
  ) {}

  public async execute({ command: { data } }: UpdateServerOverviewCommand) {
    try {
      await Promise.resolve();
      console.log(data);
      //   const { documentId } = await this.strapi.servers.create({
      //     data: {
      //       Title: data.title,
      //       Description: data.description,
      //       GitHubUrl: data.githubUrl,
      //       IsOfficial: data.isOfficial,
      //       Tools: JSON.stringify(data.tools),
      //       Settings: JSON.stringify(data.settings),
      //     },
      //   });
      //   if (!documentId) throw new Error('No documentId');
      //   this.eventBus.publish(
      //     new CreateDraftServerSucceedEvent({
      //       data,
      //       documentId,
      //     }),
      //   );
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
