import { inject, Injectable, isDevMode } from '@angular/core';
import { of, type Observable } from 'rxjs';
import { CenterRepository } from './center.repository';
import { HttpParams } from '@angular/common/http';
import { ApiHttpService } from '@app/core/base-services/api-http.service';
import type { IResponse } from '@app/shared/models/common';
import { AUTH_CONFIG } from '@app/core/auth/auth.const';
import { HttpMethod } from '@app/core/base-services/models';
import type { ICenterInfo } from '@app/shared/models/dto/center/center-info.interface';
import { centerList } from './helpers/mock-data';

@Injectable({
  providedIn: 'root',
})
export class CenterService {
  public getCenterList(code: string): Observable<IResponse<ICenterInfo[]>> {
    if (isDevMode()) {
      return of(centerList);
    } else {
      const body = new HttpParams().set('uuid', code);
      const request = {
        method: HttpMethod.POST,
        endpoint: AUTH_CONFIG.getCenters2,
        body: body.toString(),
      };

      return this.api.post$<IResponse<ICenterInfo[]>>(request);
    }
  }

  private readonly centerRepository = inject(CenterRepository);
  private readonly api = inject(ApiHttpService);
}
