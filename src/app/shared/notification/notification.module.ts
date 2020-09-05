import { NgModule } from '@angular/core';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule
} from '@angular/material/snack-bar';
import { NotificationService } from './notification.service';

@NgModule({
  imports: [
    MatSnackBarModule
  ],
  providers: [
    NotificationService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000}}
  ]
})
export class NotificationModule {

}
