/* eslint-disable @typescript-eslint/member-ordering */
import { inject, Injectable } from '@angular/core';
import { APP_STORE } from './app.store.ts';

@Injectable({ providedIn: 'root' })
export class AppFacade {
  // Expose signals (readonly)
  private readonly store = inject(APP_STORE);
  public readonly isLoading = this.store.isLoading;
  public readonly error = this.store.error;
  public readonly dynamicHeaderTitle = this.store.dynamicHeaderTitle;
  public readonly theme = this.store.theme;
  public readonly sidebar = this.store.sideBar;
  public readonly fixSidBarOn = this.store.fixSidBarOn;

  public setDynamicHeaderTitle(dynamicHeaderTitle: string) {
    this.store.setDynamicHeaderTitle(dynamicHeaderTitle);
  }
  public toggleTheme() {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark-theme');
    this.store.toggleTheme();
  }

  public toggleSidebar() {
    if (this.fixSidBarOn() === true && this.sidebar() === true) {
      return;
    }
    this.store.toggleSidebar();
  }

  public closeSidebar() {
    if (this.fixSidBarOn() === true && this.sidebar() === true) {
      return;
    }
    this.store.closeSidebar();
  }

  public setLoading(status: boolean) {
    this.store.setLoading(status);
  }

  public setFixeSidebarOn(value: boolean) {
    this.store.setFixSidBarOn(value);
  }
}
