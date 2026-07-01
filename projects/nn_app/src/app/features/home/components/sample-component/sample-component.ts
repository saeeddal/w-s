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
  mode = input<string>('mode');
  closeDialog = output<DialogResult>();
  onSave() {
    // do internal task finally call closeWithState
    this.closeWithState('save');
  }

  onCancel() {
    this.closeWithState('close');
  }

  closeWithState(action: 'save' | 'cancel' | 'close', data?: any, message?: string) {
    this.closeDialog.emit({
      action,
      data: data,
      message: message || `${action} completed`,
    });
  }
}
