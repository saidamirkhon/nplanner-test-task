import {
  createAction,
  props
} from '@ngrx/store';

export const showErrorNotification = createAction(
  '[App] Show error notification',
  props<{message: string}>()
);
