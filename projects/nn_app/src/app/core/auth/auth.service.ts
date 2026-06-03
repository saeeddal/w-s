import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { AUTH_CONFIG } from './auth.const';

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

    return this.http.post<TokenResponse>(AUTH_CONFIG.tokenUrl, body.toString(), {
      headers: new HttpHeaders({
        Authorization: `Basic ${this.getBasicToken()}`,

        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  public logout() {}

  private readonly http = inject(HttpClient);

  private getBasicToken(): string {
    return btoa(`${AUTH_CONFIG.clientId}:${AUTH_CONFIG.clientSecret}`);
  }
}
