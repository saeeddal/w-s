/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

export interface DialogResult {
  action: 'save' | 'cancel' | 'close';
  data?: any;
  message?: string;
}

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule],
  templateUrl: './sample-component.html',
  styleUrl: './sample-component.scss',
})
export class SampleComponent {
  // Signal inputs
  mode = input<string>('mode');

  // Signal outputs with DialogResult
  closeDialog = output<DialogResult>();
  saveDialog = output<any>();
  cancelDialog = output<void>();

  /**
   * Handle Save - closes with save state
   */
  onSave() {
    this.saveDialog.emit(true);
  }

  /**
   * Handle Cancel - closes with cancel state
   */
  onCancel() {
    // Emit cancel event
    this.cancelDialog.emit();

    // Alternative: Close directly with state
    // this.closeDialog.emit({
    //   action: 'cancel',
    //   message: 'Operation cancelled'
    // });
  }

  /**
   * Direct close with custom state
   */
  closeWithState(action: 'save' | 'cancel' | 'close', data?: any, message?: string) {
    this.closeDialog.emit({
      action,
      data: data,
      message: message || `${action} completed`,
    });
  }
}
