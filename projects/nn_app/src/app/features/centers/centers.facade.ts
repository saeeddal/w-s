import { inject, Injectable } from '@angular/core';
import { CENTER_STORE } from './centers.store.ts.js';
import { CenterRepository } from './center.repository.js';
import type { IIdTitle } from '@app/shared/models/common/common.interface.js';

@Injectable({ providedIn: 'root' })
export class CenterFacade {
  public store = inject(CENTER_STORE);
  public repository = inject(CenterRepository);
  public isLoading = this.store.isLoading;
  public error = this.store.error;
  public centerItems = this.store.centerItems;
  public selectedCenter = this.store.selectedCenter;

  public setSelectedCenter(selectedCenter: IIdTitle) {
    this.repository.saveSelectedCenter(selectedCenter);
    this.store.setSelectedCenter(selectedCenter);
  }

  public clearError() {
    this.store.clearError();
  }

  public async restoreSession() {
    const selectedCenter = this.centerRepository.getSelectedCenter();
    if (selectedCenter && this.isNotNullOrEmpty(selectedCenter)) {
      this.store.setSelectedCenter(JSON.parse(selectedCenter));
    }
  }

  private readonly centerRepository = inject(CenterRepository);
  private isNotNullOrEmpty(value: string | null | undefined): boolean {
    return value !== null && value?.trim() !== '';
  }
}
