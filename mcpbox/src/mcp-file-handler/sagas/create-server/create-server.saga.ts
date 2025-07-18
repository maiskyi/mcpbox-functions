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
import { UpdateServerOverviewSucceedEvent } from '../../events/update-server-overview-succeed';
import { UpdateServerOwnerSucceedEvent } from '../../events/update-server-owner-succeed';
import { UpdateServerCategorySucceedEvent } from '../../events/update-server-category-succeed';
import { GetServerReadmeSucceedEvent } from '../../events/get-server-readme-succeed';
// Commands
import { CreateDraftServerCommand } from '../../commands/create-draft-server';
import { UpdateServerOverviewCommand } from '../../commands/update-server-overview';
import { UpdateServerOwnerCommand } from '../../commands/update-server-owner';
import { UpdateServerCategoryCommand } from '../../commands/update-server-category';
import { PublishServerCommand } from '../../commands/publish-server';
import { GetServerReadmeCommand } from '../../commands/get-server-readme';
import { UpdateServerLogoCommand } from '../../commands/update-server-logo';

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
      mergeMap(({ event }: CreateDraftServerSucceedEvent) => {
        return from([
          new GetServerReadmeCommand(event),
          new UpdateServerLogoCommand(event),
        ]);
      }),
      tap(({ command }) => {
        if (command.constructor.name === GetServerReadmeCommand.name) {
          this.logger.log(`Getting server ReadMe: ${command.data.title}`);
        }
        if (command.constructor.name === UpdateServerLogoCommand.name) {
          this.logger.log(`Updating server logo: ${command.data.title}`);
        }
      }),
    );

    const readme$ = events$.pipe(
      ofType(GetServerReadmeSucceedEvent),
      mergeMap(({ event }: GetServerReadmeSucceedEvent) => {
        return from([
          new UpdateServerOwnerCommand(event),
          new UpdateServerCategoryCommand(event),
          new UpdateServerOverviewCommand(event),
        ]);
      }),
      tap((command) => {
        if (command.constructor.name === UpdateServerOwnerCommand.name) {
          this.logger.log(
            `Updating server owner: ${command.command.data.title}`,
          );
        }
        if (command.constructor.name === UpdateServerCategoryCommand.name) {
          this.logger.log(
            `Updating server category: ${command.command.data.title}`,
          );
        }
        if (command.constructor.name === UpdateServerOverviewCommand.name) {
          this.logger.log(
            `Updating server overview: ${command.command.data.title}`,
          );
        }
      }),
    );

    const owner$ = events$.pipe(
      ofType(UpdateServerOwnerSucceedEvent),
      map(({ event }: UpdateServerOwnerSucceedEvent) => event),
    );

    const overview$ = events$.pipe(
      ofType(UpdateServerOverviewSucceedEvent),
      map(({ event }: UpdateServerOverviewSucceedEvent) => event),
    );

    const category$ = events$.pipe(
      ofType(UpdateServerCategorySucceedEvent),
      map(({ event }: UpdateServerCategorySucceedEvent) => event),
    );

    const combined$ = combineLatest([owner$, overview$, category$]).pipe(
      filter(([owner, overview, category]) =>
        [owner.documentId, overview.documentId, category.documentId].every(
          (id, _, arr) => id === arr[0],
        ),
      ),
      map(([event]) => {
        return new PublishServerCommand(event);
      }),
      tap(({ command }) =>
        this.logger.log(`Publishing server: ${command.data.title}`),
      ),
    );

    return merge(new$, draft$, readme$, combined$);
  }
}
