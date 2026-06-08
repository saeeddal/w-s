import { inject, Injectable } from '@angular/core';
import { HOME_STORE } from './home.store.ts.js';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  // Expose signals (readonly)
  public store = inject(HOME_STORE);
  public isLoading = this.store.isLoading;
  public error = this.store.error;
  public totalCount = this.store.totalCount;

  public clearError() {
    this.store.clearError();
  }
}
