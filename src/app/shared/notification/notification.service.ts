import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class NotificationService {
  constructor(private matSnackBar: MatSnackBar) {
  }

  showError(message: string): void {
    this.matSnackBar.open(
      message,
      'close',
      {
        horizontalPosition: 'right',
        verticalPosition: 'top'
      }
    );
  }
}
