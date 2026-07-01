/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { OnInit, ComponentRef, Type, AfterViewInit } from '@angular/core';
import {
  Component,
  ViewChild,
  ViewContainerRef,
  signal,
  inject,
  ChangeDetectorRef,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import type { IDialogResult } from '../../../../public-api';
import { PtButton, PtIcon, PtLabel, UK_TYPE } from '../../../../public-api';

@Component({
  selector: 'pt-dynamic-dialog-wrapper',
  standalone: true,
  imports: [CommonModule, ButtonModule, PtLabel, PtIcon, PtButton],
  templateUrl: './dynamic-dialog-wrapper.html',
  styleUrl: './dynamic-dialog-wrapper.scss',
})
export class PtDynamicDialogWrapper implements OnInit, AfterViewInit {
  // ⭐ IMPORTANT: ViewChild for the container
  @ViewChild('componentHost', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  // ⭐ NEW: Reference to the host element
  @ViewChild('componentHost', { read: ElementRef, static: true })
  hostElement!: ElementRef;

  // Signals for internal state
  header = signal<string>('Dialog');
  showHeader = signal<boolean>(false);
  showFooter = signal<boolean>(false);
  isTextContent = signal<boolean>(false);
  textContent = signal<string>('');
  cancelTitle = signal<string>('انصراف');
  saveTitle = signal<string>('ذخیره');

  private ref = inject(DynamicDialogRef);
  private config = inject(DynamicDialogConfig);
  private cdr = inject(ChangeDetectorRef);
  private renderer = inject(Renderer2);

  public readonly UK_TYPE = UK_TYPE;

  private componentRef?: ComponentRef<any>;
  private componentInstance?: any;

  ngOnInit() {
    const data = this.config.data || {};
    // Set header
    this.header.set(data.header || '');
    this.showHeader.set(data.showHeader ?? true);
    this.showFooter.set(data.showFooter ?? data.showFooterAction ?? false);
    this.cancelTitle.set(data.cancelTitle || 'انصراف');
    this.saveTitle.set(data.saveTitle || 'ذخیره');
    // Handle content
    const content = data.content;

    if (typeof content === 'string') {
      // Text content
      this.isTextContent.set(true);
      this.textContent.set(content);
    } else if (content) {
      // Component content - will be created in ngAfterViewInit
      this.isTextContent.set(false);
      // ⭐ Store the component to create it after view init
      this.createComponent(content, data.componentData || {});
    } else if (data.component) {
      // Backward compatibility
      this.isTextContent.set(false);
      this.createComponent(data.component, data.componentData || {});
    }
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  private createComponent(component: Type<any>, componentData: any) {
    if (!this.container) {
      return;
    }

    try {
      // ⭐ Clear any existing content
      this.container.clear();

      // ⭐ Create component in the container
      this.componentRef = this.container.createComponent(component);
      this.componentInstance = this.componentRef.instance;

      // Set inputs
      if (componentData) {
        for (const [key, value] of Object.entries(componentData)) {
          if (this.componentRef) {
            this.componentRef.setInput(key, value);
          }
        }
      }

      // ⭐ CRITICAL: Get the native element and move it into the host
      const componentElement = this.componentRef.location.nativeElement;
      const hostElement = this.hostElement.nativeElement;

      // ⭐ Ensure the component is inside the host element
      if (componentElement.parentElement !== hostElement) {
        // If the component is not inside the host, move it there
        this.renderer.appendChild(hostElement, componentElement);
      }

      // ⭐ Apply styles to ensure it takes full space
      this.renderer.setStyle(componentElement, 'display', 'block');
      this.renderer.setStyle(componentElement, 'width', '100%');
      this.renderer.setStyle(componentElement, 'height', '100%');
      this.renderer.setStyle(componentElement, 'min-height', '100px');

      // Setup event listeners
      this.setupComponentCommunication();

      this.cdr.detectChanges();
    } catch (error) {
      this.isTextContent.set(true);
      this.textContent.set('Error loading component');
      this.cdr.detectChanges();
    }
  }

  /**
   * Setup communication with the dynamic component
   */
  private setupComponentCommunication() {
    if (!this.componentInstance) {
      return;
    }

    // Listen for close/save/cancel events from component
    if (this.componentInstance.closeDialog) {
      this.componentInstance.closeDialog.subscribe((result: IDialogResult | any) => {
        this.close(result);
      });
    }

    if (this.componentInstance.cancelDialog) {
      this.componentInstance.cancelDialog.subscribe(() => {
        this.cancel();
      });
    }

    if (this.componentInstance.saveDialog) {
      this.componentInstance.saveDialog.subscribe((data?: any) => {
        this.save(data);
      });
    }

    // Provide wrapper reference to component for direct control
    if (this.componentInstance.setDialogWrapper) {
      this.componentInstance.setDialogWrapper(this);
    }

    // ⭐ Provide dialog actions to component
    if (this.componentInstance.getDialogActions) {
      this.componentInstance.getDialogActions({
        save: this.save.bind(this),
        cancel: this.cancel.bind(this),
        close: this.close.bind(this),
      });
    }
  }

  save(data?: any) {
    const dialogData = data || this.componentInstance?.getDialogData?.() || null;
    this.close({
      action: 'save',
      data: dialogData,
      message: 'Data saved successfully',
    });
  }

  cancel() {
    this.close({
      action: 'cancel',
      message: 'Operation cancelled',
    });
  }

  close(result?: IDialogResult | any) {
    if (result && typeof result === 'object' && !result.action) {
      result = { action: 'close', data: result };
    }

    // Clean up component
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = undefined;
      this.componentInstance = undefined;
    }

    this.ref.close(result || { action: 'close' });
  }

  /**
   * ⭐ NEW: Get the component instance
   */
  getComponentInstance() {
    return this.componentInstance;
  }

  /**
   * ⭐ NEW: Update component data dynamically
   */
  updateComponentData(data: any) {
    if (this.componentRef && data) {
      for (const [key, value] of Object.entries(data)) {
        this.componentRef.setInput(key, value);
      }
      this.cdr.detectChanges();
    }
  }
}
