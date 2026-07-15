import { inject, Injectable, isDevMode } from '@angular/core';
import { of, type Observable } from 'rxjs';
import { AUTH_CONFIG } from './auth.const';
import { ApiHttpService } from '../services/api-http.service';
import { HttpMethod } from '../services/models/http-method.enum';
import type { AuthTokenResponse } from '../../shared/models/auth/token-response.interface';
import { HttpParams } from '@angular/common/http';
import type { ISidebarMenuItem, IUserInfoResponse } from '@app/shared/models/auth';
import type { IResponse } from '@app/shared/models/common';
import { menuList } from './helper/mock-data';

type TokenResponse = {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public login(): void {
    const STATE = Math.floor(Math.random() * 1000000).toString();

    const params = new URLSearchParams({
      redirect_uri: AUTH_CONFIG.redirectUri,
      response_type: 'code',
      scope: AUTH_CONFIG.clientScope,
      client_id: AUTH_CONFIG.clientId,
      state: STATE,
    });

    window.location.href = `${AUTH_CONFIG.authorizeUrl}?${params}`;
  }

  public exchangeCodeForToken(code: string): Observable<TokenResponse> {
    const body = new HttpParams()
      .set('grant_type', AUTH_CONFIG.grant_type)
      .set('code', code)
      .set('redirect_uri', AUTH_CONFIG.redirectUri);

    const request = {
      method: HttpMethod.POST,
      endpoint: AUTH_CONFIG.tokenUrl,
      body: body.toString(),
    };

    return this.api.post$<AuthTokenResponse>(request, { showSuccess: false });
  }

  public logout() {}

  public getUser(): Observable<IUserInfoResponse> {
    const request = {
      endpoint: AUTH_CONFIG.user,
      body: {},
    };

    return this.api.post$<IUserInfoResponse>(request);
  }

  /**
   * Get menu list - Shows error messages, NO success message
   */

  public getMenuList(): Observable<IResponse<ISidebarMenuItem[]>> {
    if (isDevMode()) {
      return of(menuList);
    }
    const request = {
      endpoint: AUTH_CONFIG.getList2,
    };
    return this.api.post$<IResponse<ISidebarMenuItem[]>>(request);
  }
  private readonly api = inject(ApiHttpService);
}
