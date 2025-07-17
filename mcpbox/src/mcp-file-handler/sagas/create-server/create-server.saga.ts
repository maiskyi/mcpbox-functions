import { Injectable, Logger } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, merge, Observable, tap } from 'rxjs';

// Events
import { NewServerFoundEvent } from '../../events/new-server-found';
import { CreateDraftServerSucceedEvent } from '../../events/create-draft-server-succeed';
import { UpdateServerOverviewSucceedEvent } from '../../events/update-server-overview-succeed';
import { UpdateServerOwnerSucceedEvent } from '../../events/update-server-owner-succeed';
import { UpdateServerCategorySucceedEvent } from '../../events/update-server-category-succeed';
// Commands
import { CreateDraftServerCommand } from '../../commands/create-draft-server';
import { UpdateServerOverviewCommand } from '../../commands/update-server-overview';
import { UpdateServerOwnerCommand } from '../../commands/update-server-owner';
import { UpdateServerCategoryCommand } from '../../commands/update-server-category';
import { PublishServerCommand } from '../../commands/publish-server';
import { GetServerReadmeCommand } from '../../commands/get-server-readme';

@Injectable()
export class CreateServerSaga {
  private readonly logger = new Logger(CreateServerSaga.name, {
    timestamp: true,
  });

  @Saga()
  public generate(events$: Observable<any>): Observable<ICommand> {
    const new$ = events$.pipe(
      ofType(NewServerFoundEvent),
      map(
        ({ event }: NewServerFoundEvent) => new CreateDraftServerCommand(event),
      ),
      tap(({ command }: CreateDraftServerCommand) =>
        this.logger.log(`Creating draft server: ${command.data.title}`),
      ),
    );

    const draft$ = events$.pipe(
      ofType(CreateDraftServerSucceedEvent),
      map(
        ({ event }: CreateDraftServerSucceedEvent) =>
          new GetServerReadmeCommand(event),
      ),
      tap(({ command }: GetServerReadmeCommand) =>
        this.logger.log(`Getting server ReadMe: ${command.data.title}`),
      ),
    );

    return merge(
      new$,
      draft$,
      // events$.pipe(
      //   ofType(UpdateServerOverviewSucceedEvent),
      //   map(
      //     ({ event }: UpdateServerOverviewSucceedEvent) =>
      //       new UpdateServerOwnerCommand(event),
      //   ),
      //   tap(({ command }: UpdateServerOwnerCommand) =>
      //     this.logger.log(`Updating server owner ${command.data.title}`),
      //   ),
      // ),
      // events$.pipe(
      //   ofType(UpdateServerOwnerSucceedEvent),
      //   map(
      //     ({ event }: UpdateServerOwnerSucceedEvent) =>
      //       new UpdateServerCategoryCommand(event),
      //   ),
      //   tap(({ command }: UpdateServerCategoryCommand) =>
      //     this.logger.log(`Updating server category ${command.data.title}`),
      //   ),
      // ),
      // events$.pipe(
      //   ofType(UpdateServerCategorySucceedEvent),
      //   map(
      //     ({ event }: UpdateServerCategorySucceedEvent) =>
      //       new PublishServerCommand(event),
      //   ),
      //   tap(({ command }: PublishServerCommand) =>
      //     this.logger.log(`Publishing server ${command.data.title}`),
      //   ),
      // ),
    );
  }
}
