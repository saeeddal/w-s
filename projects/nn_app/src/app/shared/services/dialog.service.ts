/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Type } from '@angular/core';
import { Injectable, inject } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogWrapperComponent } from '../components/dynamic-dialog-wrapper/dynamic-dialog-wrapper';

export type DialogContent = Type<any> | string;

export interface DialogConfig {
  header?: string;
  width?: string;
  data?: any;
  styleClass?: string;
  dismissableMask?: boolean;
  closable?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  draggable?: boolean;

  // New: content can be component or text
  content?: DialogContent;
  saveTitle?: string;
  cancelTitle?: string;
}

@Injectable({ providedIn: 'root' })
export class AppDialogService {
  private dialogService = inject(DialogService);

  /**
   * Open a dialog with dynamic content (component or text)
   */
  open(content: DialogContent, config: DialogConfig = {}) {
    const ref = this.dialogService.open(DynamicDialogWrapperComponent, {
      showHeader: false,
      width: config.width || '720px',
      styleClass: config.styleClass || 'app-custom-dialog',
      dismissableMask: config.dismissableMask !== undefined ? config.dismissableMask : true,
      closable: config.closable !== undefined ? config.closable : true,
      contentStyle: { padding: '0', 'border-radius': '8px' },
      draggable: true,
      data: {
        header: config.header || 'Dialog',
        content: content, // Pass content (component or string)
        componentData: config.data || {},
        showFooterAction: config.showFooter ?? config.data?.showFooterAction,
        showHeader: config.showHeader ?? config.data?.showHeader,
        cancelTitle: config.cancelTitle,
        saveTitle: config.saveTitle,
      },
    });

    return ref;
  }

  /**
   * Convenience method for text-only dialogs
   */
  openText(text: string, config: DialogConfig = {}) {
    return this.open(text, config);
  }

  /**
   * Convenience method for component dialogs
   */
  openComponent<T>(component: Type<T>, config: DialogConfig = {}) {
    return this.open(component, config);
  }
}
