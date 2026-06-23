/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { OnDestroy } from '@angular/core';
import {
  Directive,
  input,
  effect,
  inject,
  TemplateRef,
  ViewContainerRef,
  computed,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appRemoveBelow]',
  standalone: true,
})
export class PtRemoveBelowDirective implements OnDestroy {
  readonly appRemoveBelow = input.required<number>();

  private templateRef = inject(TemplateRef<any>);
  private viewContainer = inject(ViewContainerRef);
  private platformId = inject(PLATFORM_ID);

  // Reactive width signal
  private readonly screenWidth = signal(0);
  private resizeListener?: () => void;

  private isVisible = computed(() => {
    if (!isPlatformBrowser(this.platformId)) {
      return true;
    }
    return this.screenWidth() >= this.appRemoveBelow();
  });

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateScreenWidth();

      this.resizeListener = () => this.updateScreenWidth();
      window.addEventListener('resize', this.resizeListener, { passive: true });
    }

    // React to any change in visibility
    effect(() => {
      this.updateView();
    });
  }

  private updateScreenWidth() {
    this.screenWidth.set(window.innerWidth);
  }

  private updateView() {
    this.viewContainer.clear();

    if (this.isVisible()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  ngOnDestroy() {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }
}
