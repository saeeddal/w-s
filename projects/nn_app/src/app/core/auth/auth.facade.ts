/* eslint-disable @typescript-eslint/member-ordering */
import { inject, Injectable } from '@angular/core';
import { AUTH_STORE } from './auth.store';
import { AuthService } from './auth.service';
import { firstValueFrom } from 'rxjs';
import { AuthRepository } from './auth.repository';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  private store = inject(AUTH_STORE);
  private readonly authService = inject(AuthService);
  private readonly authRepository = inject(AuthRepository);

  public readonly isAuthenticated = this.store.isAuthenticated;

  public readonly accessToken = this.store.accessToken;

  public login(): void {
    this.authService.login();
  }

  public async exchangeCodeForToken(code: string): Promise<void> {
    this.store.setLoading(true);

    try {
      const tokenResponse = await firstValueFrom(this.authService.exchangeCodeForToken(code));
      this.authRepository.saveAccessToken(tokenResponse.access_token);
      this.authRepository.saveExpireTimeAccessToken(Date.now() + tokenResponse.expires_in * 1000);
      this.store.setToken(tokenResponse.access_token);
      this.store.setExpiresIn(Date.now() + tokenResponse.expires_in * 1000);
    } finally {
      this.store.setLoading(false);
    }
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expire_in');
    this.store.logout();
  }

  public async restoreSession() {
    const token = this.authRepository.getAccessToken();
    const expire_in = this.authRepository.getExpireIn();

    if (!token || !expire_in) {
      return;
    }

    this.store.setToken(token);
    this.store.setExpiresIn(Number(expire_in));
  }
}
