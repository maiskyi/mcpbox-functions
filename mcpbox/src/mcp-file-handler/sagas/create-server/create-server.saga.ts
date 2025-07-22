import { Injectable, Logger } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import {
  map,
  merge,
  Observable,
  tap,
  combineLatest,
  filter,
  mergeMap,
  from,
} from 'rxjs';

// Events
import { NewServerFoundEvent } from '../../events/new-server-found';
import { CreateDraftServerSucceedEvent } from '../../events/create-draft-server-succeed';
import { SetServerOverviewSucceedEvent } from '../../events/set-server-overview-succeed';
import { SetServerOwnerSucceedEvent } from '../../events/set-server-owner-succeed';
import { SetServerCategorySucceedEvent } from '../../events/set-server-category-succeed';
import { GetServerReadmeSucceedEvent } from '../../events/get-server-readme-succeed';
import { SetServerLogoSucceedEvent } from '../../events/set-server-logo-succeed';
import { SetServerPartitionFailedEvent } from '../../events/set-server-partition-failed';
// Commands
import { CreateDraftServerCommand } from '../../commands/create-draft-server';
import { SetServerOverviewCommand } from '../../commands/set-server-overview';
import { SetServerOwnerCommand } from '../../commands/set-server-owner';
import { SetServerCategoryCommand } from '../../commands/set-server-category';
import { PublishServerCommand } from '../../commands/publish-server';
import { GetServerReadmeCommand } from '../../commands/get-server-readme';
import { SetServerLogoCommand } from '../../commands/set-server-logo';
import { DeleteDraftServerCommand } from '../../commands/delete-draft-server';

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

    const failed$ = events$.pipe(
      ofType(SetServerPartitionFailedEvent),
      map(
        ({ event }: SetServerPartitionFailedEvent) =>
          new DeleteDraftServerCommand(event),
      ),
      tap(({ command }: DeleteDraftServerCommand) =>
        this.logger.log(`Deleting draft server: ${command.data.title}`),
      ),
    );

    const draft$ = events$.pipe(
      ofType(CreateDraftServerSucceedEvent),
      mergeMap(({ event }: CreateDraftServerSucceedEvent) => {
        return from([new GetServerReadmeCommand(event)]);
      }),
      tap(({ command }) => {
        if (command.constructor.name === GetServerReadmeCommand.name) {
          this.logger.log(`Getting server ReadMe: ${command.data.title}`);
        }
      }),
    );

    const readme$ = events$.pipe(
      ofType(GetServerReadmeSucceedEvent),
      mergeMap(({ event }: GetServerReadmeSucceedEvent) => {
        return from([
          new SetServerOwnerCommand(event),
          new SetServerCategoryCommand(event),
          new SetServerOverviewCommand(event),
          new SetServerLogoCommand(event),
        ]);
      }),
      tap((command) => {
        if (command.constructor.name === SetServerOwnerCommand.name) {
          this.logger.log(
            `Updating server owner: ${command.command.data.title}`,
          );
        }
        if (command.constructor.name === SetServerCategoryCommand.name) {
          this.logger.log(
            `Updating server category: ${command.command.data.title}`,
          );
        }
        if (command.constructor.name === SetServerOverviewCommand.name) {
          this.logger.log(
            `Updating server overview: ${command.command.data.title}`,
          );
        }
        if (command.constructor.name === SetServerLogoCommand.name) {
          this.logger.log(
            `Updating server logo: ${command.command.data.title}`,
          );
        }
      }),
    );

    const owner$ = events$.pipe(
      ofType(SetServerOwnerSucceedEvent),
      map(({ event }: SetServerOwnerSucceedEvent) => event),
    );

    const overview$ = events$.pipe(
      ofType(SetServerOverviewSucceedEvent),
      map(({ event }: SetServerOverviewSucceedEvent) => event),
    );

    const category$ = events$.pipe(
      ofType(SetServerCategorySucceedEvent),
      map(({ event }: SetServerCategorySucceedEvent) => event),
    );

    const logo$ = events$.pipe(
      ofType(SetServerLogoSucceedEvent),
      map(({ event }: SetServerLogoSucceedEvent) => event),
    );

    const combined$ = combineLatest([owner$, overview$, category$, logo$]).pipe(
      filter(([owner, overview, category, logo]) =>
        [
          owner.documentId,
          overview.documentId,
          category.documentId,
          logo.documentId,
        ].every((id, _, arr) => id === arr[0]),
      ),
      map(([event]) => {
        return new PublishServerCommand(event);
      }),
      tap(({ command }) =>
        this.logger.log(`Publishing server: ${command.data.title}`),
      ),
    );

    return merge(new$, draft$, readme$, failed$, combined$);
  }
}
