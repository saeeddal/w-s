/* eslint-disable @typescript-eslint/member-ordering */
import { inject, Injectable } from '@angular/core';
import { GUID_STORE } from './guid.store.ts.js';
import { firstValueFrom } from 'rxjs';
import { GuidService } from './guid.service.js';

@Injectable({ providedIn: 'root' })
export class GuidFacade {
  // Expose signals (readonly)
  private store = inject(GUID_STORE);
  public isLoading = this.store.isLoading;
  public error = this.store.error;
  public totalCount = this.store.totalCount;
  public post = this.store.post;
  public posts = this.store.posts;

  public clearError() {
    this.store.clearError();
  }

  public async getPost1(): Promise<void> {
    this.store.setLoading(true);
    try {
      const menuListResponse = await firstValueFrom(this.guidService.getPost1());
      this.store.setPost(menuListResponse[0]);
      this.store.setLoading(false);
    } catch (e: unknown) {
    } finally {
      this.store.setLoading(false);
    }
  }

  private readonly guidService = inject(GuidService);
}
