import type { Type } from '@angular/core';

export interface IDialogResult {
  action: 'save' | 'cancel' | 'close' | 'dismiss';
  data?: object;
  message?: string;
}

type DialogContent = Type<unknown> | string;

export interface IDialogWrapperConfig {
  header?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  content?: DialogContent;
  componentData?: object;
}
