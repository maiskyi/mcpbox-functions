import { Injectable, Logger } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, merge, Observable, tap } from 'rxjs';

// Events
import { NewServerFoundEvent } from '../../events/new-server-found';
import { CreateDraftServerSucceedEvent } from '../../events/create-draft-server-succeed';
import { UpdateServerOverviewSucceedEvent } from '../../events/update-server-overview-succeed';
import { UpdateServerOwnerSucceedEvent } from '../../events/update-server-owner-succeed';
// Commands
import { CreateDraftServerCommand } from '../../commands/create-draft-server';
import { UpdateServerOverviewCommand } from '../../commands/update-server-overview';
import { UpdateServerOwnerCommand } from '../../commands/update-server-owner';
import { UpdateServerCategoryCommand } from '../../commands/update-server-category';

@Injectable()
export class CreateServerSaga {
  private readonly logger = new Logger(CreateServerSaga.name, {
    timestamp: true,
  });

  @Saga()
  public generate(events$: Observable<any>): Observable<ICommand> {
    return merge(
      events$.pipe(
        ofType(NewServerFoundEvent),
        map(
          ({ event }: NewServerFoundEvent) =>
            new CreateDraftServerCommand(event),
        ),
        tap(({ command }: CreateDraftServerCommand) =>
          this.logger.log(`Creating draft server ${command.data.title}`),
        ),
      ),
      events$.pipe(
        ofType(CreateDraftServerSucceedEvent),
        map(
          ({ event }: CreateDraftServerSucceedEvent) =>
            new UpdateServerOverviewCommand(event),
        ),
        tap(({ command }: UpdateServerOverviewCommand) =>
          this.logger.log(`Updating server overview ${command.data.title}`),
        ),
      ),
      events$.pipe(
        ofType(UpdateServerOverviewSucceedEvent),
        map(
          ({ event }: UpdateServerOverviewSucceedEvent) =>
            new UpdateServerOwnerCommand(event),
        ),
        tap(({ command }: UpdateServerOwnerCommand) =>
          this.logger.log(`Updating server owner ${command.data.title}`),
        ),
      ),
      events$.pipe(
        ofType(UpdateServerOwnerSucceedEvent),
        map(
          ({ event }: UpdateServerOwnerSucceedEvent) =>
            new UpdateServerCategoryCommand(event),
        ),
        tap(({ command }: UpdateServerCategoryCommand) =>
          this.logger.log(`Updating server category ${command.data.title}`),
        ),
      ),
    );

    //   events$.pipe(
    //     ofType(AssetsToUploadExistEvent),
    //     map(
    //       ({ event }: AssetsToUploadExistEvent) =>
    //         new OverrideAssetsWithS3FilesCommand(event),
    //     ),
    //     tap(({ command }: OverrideAssetsWithS3FilesCommand) =>
    //       this.logger.log(`Overriding survey assets...[${command.id}]`),
    //     ),
    //   ),
    //   events$.pipe(
    //     ofType(AssetsOverridingSucceededEvent),
    //     map(
    //       ({ event }: AssetsOverridingSucceededEvent) =>
    //         new MarkSurveyAsCompletedCommand(event),
    //     ),
    //     tap(({ command }: MarkSurveyAsCompletedCommand) =>
    //       this.logger.log(`Assets overriding succeeded...[${command.id}]`),
    //     ),
    //   ),
    //   events$.pipe(
    //     ofType(SurveyCompletionSucceededEvent),
    //     map(
    //       ({ event }: SurveyCompletionSucceededEvent) => new NoopCommand(event),
    //     ),
    //     tap(({ command }: NoopCommand) =>
    //       this.logger.log(`Survey completion succeeded...[${command.id}]`),
    //     ),
    //   ),
    //   events$.pipe(
    //     ofType(CheckingFilesToUploadFailedEvent),
    //     map(
    //       ({ event }: CheckingFilesToUploadFailedEvent) =>
    //         new MarkSurveyAsCompletedCommand(event),
    //     ),
    //     tap(({ command }: MarkSurveyAsCompletedCommand) =>
    //       this.logger.log(
    //         `Checking files to upload failed...[${command.id}]`,
    //         command.error,
    //       ),
    //     ),
    //   ),
    //   events$.pipe(
    //     ofType(SurveyCompletionFailedEvent),
    //     map(({ event }: SurveyCompletionFailedEvent) => new NoopCommand(event)),
    //     tap(({ command }: NoopCommand) =>
    //       this.logger.log(
    //         `Survey completion failed...[${command.id}]`,
    //         command.error,
    //       ),
    //     ),
    //   ),
    //   events$.pipe(
    //     ofType(AssetsOverridingFailedEvent),
    //     map(
    //       ({ event }: AssetsOverridingFailedEvent) =>
    //         new MarkSurveyAsCompletedCommand(event),
    //     ),
    //     tap(({ command }: NoopCommand) =>
    //       this.logger.log(
    //         `Assets overriding failed...[${command.id}]`,
    //         command.error,
    //       ),
    //     ),
    //   ),
  }
}
