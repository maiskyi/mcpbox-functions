import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';

import { CreateDraftServerCommand } from './create-draft-server.command';

@CommandHandler(CreateDraftServerCommand)
export class CreateDraftServerHandler
  implements ICommandHandler<CreateDraftServerCommand>
{
  private readonly logger = new Logger(CreateDraftServerHandler.name, {
    timestamp: true,
  });

  public constructor(
    private eventBus: EventBus,
    private strapi: StrapiClientService,
  ) {}

  public async execute({ command: { data } }: CreateDraftServerCommand) {
    try {
      const { documentId } = await this.strapi.servers.create({
        data: {
          Title: data.title,
          Description: data.description,
          GitHubUrl: data.githubUrl,
          IsOfficial: data.isOfficial,
          Tools: JSON.stringify(data.tools),
          Settings: JSON.stringify(data.settings),
        },
      });

      if (!documentId) throw new Error('No documentId');

      this.eventBus.publish(
        new AssetsToUploadExistEvent({
          ...command,
          assets,
        }),
      );
      //   const { slug } = command;
      //   const { json } = await this.contentful.surveys.getBySlug({
      //     slug,
      //     language: LanguageTag['en-US'],
      //   });
      //   const elements = this.flatten(json);
      //   const assets = elements.filter(
      //     ({ type }) => type === SurveyJsonPageElementType.File,
      //   );
      //   if (assets.length) {
      //     this.eventBus.publish(
      //       new AssetsToUploadExistEvent({
      //         ...command,
      //         assets,
      //       }),
      //     );
      //   } else {
      //     this.eventBus.publish(new AssetsToUploadDoNotExistEvent(command));
      //   }
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
