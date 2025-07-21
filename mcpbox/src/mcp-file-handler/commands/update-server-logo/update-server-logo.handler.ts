import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { StrapiClientService } from '@services/strapi';
import { GithubClientService } from '@services/github';

import { UpdateServerOwnerSucceedEvent } from '../../events/update-server-owner-succeed';

import { UpdateServerLogoCommand } from './update-server-logo.command';

@CommandHandler(UpdateServerLogoCommand)
export class UpdateServerLogoHandler
  implements ICommandHandler<UpdateServerLogoCommand>
{
  private readonly logger = new Logger(UpdateServerLogoHandler.name, {
    timestamp: true,
  });

  public constructor(
    private eventBus: EventBus,
    private strapi: StrapiClientService,
    private github: GithubClientService,
  ) {}

  public async execute({
    command: { data, documentId },
  }: UpdateServerLogoCommand) {
    try {
      if (data.logo) {
        await this.strapi.upload.uploadCreateByUrl({
          url: data.logo,
          fileName: data.title,
        });

        // const server = await this.strapi.servers.update({
        //   documentId,
        //   data: {
        //     Logo: id,
        //   },
        // });

        // console.log(id);
      }
      // if (!server.documentId) throw new Error('No documentId');
      // this.eventBus.publish(
      //   new UpdateServerOwnerSucceedEvent({
      //     data,
      //     documentId,
      //   }),
      // );
    } catch (error) {
      this.logger.error(error);
    }
  }
}
