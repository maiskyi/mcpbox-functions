import { Injectable, Logger } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, merge, Observable, tap } from 'rxjs';

// Events
import { ExistingServerFoundEvent } from '../../events/existing-server-found';
// Commands
import { UpdateServerToolsSettingsCommand } from '../../commands/update-server-tools-settings';

@Injectable()
export class UpdateServerSaga {
  private readonly logger = new Logger(UpdateServerSaga.name, {
    timestamp: true,
  });

  @Saga()
  public generate(events$: Observable<any>): Observable<ICommand> {
    const existing$ = events$.pipe(
      ofType(ExistingServerFoundEvent),
      map(({ event }) => new UpdateServerToolsSettingsCommand(event)),
      tap(({ command }) =>
        this.logger.log(
          `Updating tools and setting for server: ${command.data.title}`,
        ),
      ),
    );

    return merge(existing$);
  }
}
