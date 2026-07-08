/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, input, output } from '@angular/core';

export interface DialogResult {
  action: 'save' | 'cancel' | 'close';
  data?: any;
  message?: string;
}

@Directive()
export abstract class BaseDialog {
  // Common inputs
  mode = input<string>('view'); // default to 'view' or 'edit' etc.

  // Common output for all dialogs
  closeDialog = output<DialogResult>();

  onSave(): void {
    // You can add common save logic here if needed
    this.closeWithState('save');
  }

  onCancel(): void {
    this.closeWithState('close');
  }

  onClose(): void {
    this.closeWithState('close');
  }

  protected closeWithState(
    action: 'save' | 'cancel' | 'close',
    data?: any,
    message?: string,
  ): void {
    this.closeDialog.emit({
      action,
      data,
      message: message || `${action} completed`,
    });
  }
}
