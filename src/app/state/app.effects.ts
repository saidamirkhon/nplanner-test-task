import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType
} from '@ngrx/effects';
import { showErrorNotification } from './app.actions';
import { tap } from 'rxjs/operators';
import { NotificationService } from '../shared/notification/notification.service';

@Injectable()
export class AppEffects {
  showErrorNotification$ = createEffect(
    () => this.actions$.pipe(
      ofType(showErrorNotification),
      tap((action: {message: string}) => this.notificationService.showError(action.message))
    ),
    {
      dispatch: false
    }
  );

  constructor(
    private actions$: Actions,
    private notificationService: NotificationService
  ) {
  }
}
