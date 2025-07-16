import slugify from 'slugify';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { DTO, StrapiClientService } from '@services/strapi';

import { PublishServerSucceedEvent } from '../../events/publish-server-succeed';

import { PublishServerCommand } from './publish-server.command';
import { GetSlugParams } from './publish-server.types';

@CommandHandler(PublishServerCommand)
export class PublishServerHandler
  implements ICommandHandler<PublishServerCommand>
{
  private readonly logger = new Logger(PublishServerHandler.name, {
    timestamp: true,
  });

  public constructor(
    private eventBus: EventBus,
    private strapi: StrapiClientService,
  ) {}

  private async getSlug({ title }: GetSlugParams) {
    const baseSlug = slugify(title, {
      lower: true,
      strict: true,
    });

    const { servers } = await this.strapi.servers.findMany({
      filters: {
        Slug: {
          startsWith: baseSlug,
        },
      },
      pagination: {
        limit: 9999,
      },
    });

    if (!servers.length) return baseSlug;

    const regex = new RegExp(`^${baseSlug}(?:-(\\d+))?$`);

    const suffix = servers
      .reduce((res, server) => {
        return server ? res.concat([server.Slug]) : res;
      }, [] as string[])
      .reduce((max, slug) => {
        const match = slug.match(regex);
        if (match) {
          const num = match[1] ? parseInt(match[1], 10) : 0;
          if (num >= max) return num + 1;
        }
        return max;
      }, 0);

    return suffix === 0 ? baseSlug : `${baseSlug}-${suffix}`;
  }

  public async execute({
    command: { data, documentId },
  }: PublishServerCommand) {
    try {
      const slug = await this.getSlug({ title: data.title });

      const server = await this.strapi.servers.update({
        documentId,
        data: {
          Slug: slug,
        },
        status: DTO.PublicationStatus.Published,
      });

      if (!server.documentId) throw new Error('No documentId');

      this.eventBus.publish(
        new PublishServerSucceedEvent({
          data,
          documentId,
        }),
      );
    } catch (error) {
      this.logger.error(error);
    }
  }
}
