/* eslint-disable no-console */
import { Component, inject, signal } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UK_TYPE } from '../../../../../uk-type';
import { PtButton } from '../../../button/button.component';
import { PtDialogService } from '../../../../../../public-api';
import { SampleComponent } from '../sample-component/sample-component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'pt-show-case-dialog',
  imports: [ReactiveFormsModule, FormsModule, PtButton, JsonPipe],
  templateUrl: './show-case-dialog.html',
  styleUrl: './show-case-dialog.scss',
})
export class PtShowCaseDialog {
  public readonly UK_TYPE = UK_TYPE;

  // Signal for storing results
  protected lastResult = signal<unknown>(null);

  /**
   * Open basic dialog with component
   */
  protected openBasicDialog() {
    const ref = this.appDialogService.open(SampleComponent, {
      header: 'View User',
      showHeader: true,
      showFooter: false,
      draggable: true,
      dismissableMask: true,
      saveTitle: 'ذخیره سفارشی',
      cancelTitle: 'کنسل سفارشی',

      data: {
        mode: 'view from openBasicDialog',
      },
    });

    ref?.onClose.subscribe((result) => {
      console.warn('Dialog closed:', result);
      this.lastResult.set(result);
    });
  }

  /**
   * Open dialog with footer actions
   */
  protected openDialogWithFooter() {
    const ref = this.appDialogService.open(SampleComponent, {
      header: 'Edit User',
      // width: '600px',
      showHeader: true,
      showFooter: true,
      data: {
        mode: 'edit',
      },
    });

    ref?.onClose.subscribe((result) => {
      this.lastResult.set(result);

      // Check close state
      if (result?.action === 'save') {
        console.warn('✅ Data saved:', result.data);
        // Show success message
      } else if (result?.action === 'cancel') {
        console.warn('❌ Operation cancelled');
      } else if (result?.action === 'close') {
        console.warn('❌ Dialog closed');
      }
    });
  }

  /**
   * NEW: Open text-only dialog
   */
  protected openTextDialog() {
    const ref = this.appDialogService.openText(
      'This is a simple text dialog. You can pass any text content here.\n\n' +
        'It supports multi-line text and can be used for notifications, confirmations, or info messages.',
      {
        header: 'Information',
        width: '500px',
        showHeader: true,
        showFooter: false,
      },
    );

    ref?.onClose.subscribe((result) => {
      console.warn('Text dialog closed:', result);
      this.lastResult.set(result);
    });
  }

  /**
   * NEW: Open text dialog with footer actions
   */
  protected openTextDialogWithFooter() {
    const ref = this.appDialogService.openText(
      'Are you sure you want to proceed with this action?\n\n' + 'This operation cannot be undone.',
      {
        header: 'Confirm Action',
        width: '500px',
        showHeader: true,
        showFooter: true,
        cancelTitle: 'انصراف سفارشی',
        saveTitle: 'ثبت سفارشی',
      },
    );

    ref?.onClose.subscribe((result) => {
      this.lastResult.set(result);

      if (result?.action === 'save') {
        console.warn('✅ User confirmed action');
        // Proceed with action
      } else if (result?.action === 'cancel') {
        console.warn('❌ User cancelled action');
      }
    });
  }

  private readonly appDialogService = inject(PtDialogService);
}
