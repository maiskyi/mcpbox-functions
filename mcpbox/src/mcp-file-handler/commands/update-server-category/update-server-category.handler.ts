import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';

import { UpdateServerCategorySucceedEvent } from '../../events/update-server-category-succeed';

import { UpdateServerCategoryCommand } from './update-server-category.command';

@CommandHandler(UpdateServerCategoryCommand)
export class UpdateServerCategoryHandler
  implements ICommandHandler<UpdateServerCategoryCommand>
{
  private readonly logger = new Logger(UpdateServerCategoryHandler.name, {
    timestamp: true,
  });

  public constructor(
    private eventBus: EventBus,
    private strapi: StrapiClientService,
  ) {}

  public async execute({
    command: { data, documentId },
  }: UpdateServerCategoryCommand) {
    try {
      const server = await this.strapi.servers.update({
        documentId,
        data: {
          Category: 'r128c7nfg17dwl99wh1yhdgx',
        },
      });

      if (!server.documentId) throw new Error('No documentId');

      this.eventBus.publish(
        new UpdateServerCategorySucceedEvent({
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
