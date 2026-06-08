import { inject, Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { AUTH_CONFIG } from './auth.const';
import { AuthRepository } from './auth.repository';
import { ApiHttpService } from '../base-services/api-http.service';
import { HttpMethod } from '../base-services/models/http-method.enum';
import type { AuthTokenResponse } from '../../shared/models/auth/token-response.interface';
import { HttpParams } from '@angular/common/http';
import type { IUserAuthentication } from '@app/shared/models/auth';

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

    return this.api.post$<AuthTokenResponse>(request);
  }

  public logout() {}

  public saveAccessTokenToRepo(access_token: string) {
    this.authRepository.saveAccessToken(access_token);
  }

  public saveExpireTimeAccessTokenToRepo(expires_in: number) {
    this.authRepository.saveAccessToken((Date.now() + expires_in * 1000).toString());
  }

  public getAccessTokenFromRepo(): string | null {
    return this.authRepository.getAccessToken();
  }

  public getExpireTimeAccessTokenFromRepo(): string | null {
    return this.authRepository.getExpireIn();
  }

  public getUser(): Observable<IUserAuthentication> {
    const request = {
      method: HttpMethod.POST,
      endpoint: AUTH_CONFIG.user,
    };

    return this.api.post$<IUserAuthentication>(request);
  }

  public saveUserToRepo(user: IUserAuthentication) {
    this.authRepository.saveUser(user);
  }
  public getUserFromRepo(): IUserAuthentication | null {
    return this.authRepository.getUser();
  }

  private readonly authRepository = inject(AuthRepository);
  private readonly api = inject(ApiHttpService);
}
