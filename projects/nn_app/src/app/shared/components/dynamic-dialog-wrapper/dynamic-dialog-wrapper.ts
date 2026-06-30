/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { OnInit, ComponentRef, Type } from '@angular/core';
import { Component, ViewChild, ViewContainerRef, signal, inject } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

export type DialogContent = Type<any> | string;

export interface DialogResult {
  action: 'save' | 'cancel' | 'close' | 'dismiss';
  data?: any;
  message?: string;
}

export interface DialogWrapperConfig {
  header?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  content?: DialogContent;
  componentData?: any;
}

@Component({
  selector: 'app-dynamic-dialog-wrapper',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './dynamic-dialog-wrapper.html',
  styleUrl: './dynamic-dialog-wrapper.scss',
})
export class DynamicDialogWrapperComponent implements OnInit {
  @ViewChild('componentHost', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  // Signals for internal state
  header = signal<string>('Dialog');
  showHeader = signal<boolean>(false);
  showFooter = signal<boolean>(false);
  isTextContent = signal<boolean>(false);
  textContent = signal<string>('');

  private ref = inject(DynamicDialogRef);
  private config = inject(DynamicDialogConfig);

  private componentRef?: ComponentRef<any>;
  private componentInstance?: any;

  ngOnInit() {
    const data = this.config.data || {};

    // Set header
    this.header.set(data.header || 'Dialog');
    this.showHeader.set(data.showHeader ?? true);
    this.showFooter.set(data.showFooter ?? data.showFooterAction ?? false);

    // Handle content
    const content = data.content;

    if (typeof content === 'string') {
      // Text content
      this.isTextContent.set(true);
      this.textContent.set(content);
    } else if (content && this.container) {
      // Component content
      this.isTextContent.set(false);
      this.createComponent(content, data.componentData || {});
    } else if (data.component) {
      // Backward compatibility: component in componentData
      this.isTextContent.set(false);
      this.createComponent(data.component, data.componentData || {});
    }
  }

  /**
   * Create dynamic component
   */
  private createComponent(component: Type<any>, componentData: any) {
    if (!this.container) {
      return;
    }

    this.componentRef = this.container.createComponent(component);
    this.componentInstance = this.componentRef.instance;

    // ✅ Use setInput - clean and works with all input types
    if (componentData) {
      for (const [key, value] of Object.entries(componentData)) {
        this.componentRef.setInput(key, value);
      }
    }

    // Listen for close/save/cancel events from component
    if (this.componentInstance.closeDialog) {
      this.componentInstance.closeDialog.subscribe((result: DialogResult | any) => {
        this.close(result);
      });
    }

    if (this.componentInstance.saveDialog) {
      this.componentInstance.saveDialog.subscribe((data: any) => {
        this.save(data);
      });
    }

    if (this.componentInstance.cancelDialog) {
      this.componentInstance.cancelDialog.subscribe(() => {
        this.cancel();
      });
    }

    // Provide wrapper reference to component for direct control
    if (this.componentInstance.setDialogWrapper) {
      this.componentInstance.setDialogWrapper(this);
    }
  }

  /**
   * Save - validates and closes with save state
   */
  save(data?: any) {
    // If component has validation, check it
    if (this.componentInstance?.validateData) {
      const validation = this.componentInstance.validateData();
      if (!validation.valid) {
        return;
      }
    }

    // Get data from component if not provided
    const dialogData = data || this.componentInstance?.getDialogData?.() || null;
    this.close({
      action: 'save',
      data: dialogData,
      message: 'Data saved successfully',
    });
  }

  /**
   * Cancel - closes with cancel state
   */
  cancel() {
    this.close({
      action: 'cancel',
      message: 'Operation cancelled',
    });
  }

  /**
   * Close dialog with result
   */
  close(result?: DialogResult | any) {
    // Ensure result has action if not provided
    if (result && typeof result === 'object' && !result.action) {
      result = { action: 'close', data: result };
    }

    // Clean up component
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.ref.close(result);
  }

  /**
   * Get component instance
   */
  getComponentInstance() {
    return this.componentInstance;
  }

  /**
   * Call a method on the component
   */
  callComponentMethod(methodName: string, ...args: any[]) {
    if (this.componentInstance && typeof this.componentInstance[methodName] === 'function') {
      return this.componentInstance[methodName](...args);
    }
    return null;
  }
}
