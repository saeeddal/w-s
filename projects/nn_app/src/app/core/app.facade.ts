import { inject, Injectable } from '@angular/core';

import { APP_STORE } from './app.store.ts';

@Injectable({ providedIn: 'root' })
export class AppFacade {
  // Expose signals (readonly)
  public store = inject(APP_STORE);
  public isLoading = this.store.isLoading;
  public error = this.store.error;
  public dynanicHeaderTitle = this.store.dynamicHeaderTitle;
  public userRule = this.store.userRule;
  public theme = this.store.theme;
  public sidebar = this.store.sideBar;

  public setDynamicHeaderTitle(dynamicHeaderTitle: string) {
    this.store.setDynamicHeaderTitle(dynamicHeaderTitle);
  }
  public toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    this.store.toggleTheme();
  }

  public toggleSidebar() {
    this.store.toggleSidebar();
  }
  public closeSidebar() {
    this.store.closeSidebar();
  }
  public checkLogin() {
    this.store.checkLogin();
  }
}
