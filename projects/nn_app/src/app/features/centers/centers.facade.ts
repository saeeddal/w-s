import { inject, Injectable } from '@angular/core';
import { CENTER_STORE } from './centers.store.ts.js';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  // Expose signals (readonly)
  public store = inject(CENTER_STORE);

  public isLoading = this.store.isLoading;
  public error = this.store.error;
  public centerItems = this.store.centerItems;

  // Public methods
  public loadCentersByUserId(params: { userId: number }) {
    this.store.loadCentersByUserId(params);
  }

  public clearError() {
    this.store.clearError();
  }
}
