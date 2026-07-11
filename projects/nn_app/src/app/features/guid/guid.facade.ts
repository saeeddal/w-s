import { inject, Injectable } from '@angular/core';
import { GUID_STORE } from './guid.store.ts.js';

@Injectable({ providedIn: 'root' })
export class GuidFacade {
  // Expose signals (readonly)
  public store = inject(GUID_STORE);
  public isLoading = this.store.isLoading;
  public error = this.store.error;
  public totalCount = this.store.totalCount;

  public clearError() {
    this.store.clearError();
  }
}
