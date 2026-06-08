import { inject, Injectable } from '@angular/core';
import { MAKE_PRESCRIPTION_STORE } from './make-prescription.store.ts.js';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  // Expose signals (readonly)
  public store = inject(MAKE_PRESCRIPTION_STORE);
  public isLoading = this.store.isLoading;
  public error = this.store.error;
  public totalCount = this.store.totalCount;
}
