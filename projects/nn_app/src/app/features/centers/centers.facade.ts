import { inject, Injectable } from '@angular/core';
import { CENTER_STORE } from './centers.store.ts.js';
import { CenterRepository } from './center.repository.js';
import type { IIdTitle } from '@app/shared/models/common/common.interface.js';
import { AuthFacade } from '@app/core/auth/auth.facade.js';
import { CenterService } from './center.service.js';
import { firstValueFrom } from 'rxjs';
import type { ICenterInfo } from '@app/shared/models/dto/center/center-info.interface.js';

@Injectable({ providedIn: 'root' })
export class CenterFacade {
  public readonly store = inject(CENTER_STORE);
  public readonly isLoading = this.store.isLoading;
  public readonly error = this.store.error;
  public readonly selectedCenter = this.store.selectedCenter;
  public readonly centers = this.store.centers;

  public setSelectedCenter(selectedCenter: ICenterInfo) {
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

  public async getListSelectCenter() {
    const uuid = this.AUTH_FACADE.user()?.principal?.uuid;
    if (!uuid) {
      return;
    }
    const centerList = await firstValueFrom(this.centerService.getCenterList(uuid));
    if (centerList?.message?.data) {
      this.store.setCenters(centerList?.message?.data);
    }
  }

  private readonly centerRepository = inject(CenterRepository);
  private readonly AUTH_FACADE = inject(AuthFacade);
  private readonly centerService = inject(CenterService);
  private readonly repository = inject(CenterRepository);

  private isNotNullOrEmpty(value: string | null | undefined): boolean {
    return value !== null && value?.trim() !== '';
  }
}
