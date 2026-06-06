/* eslint-disable @typescript-eslint/member-ordering */
import { inject, Injectable } from '@angular/core';
import { AUTH_STORE } from './auth.store';
import { AuthService } from './auth.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  private store = inject(AUTH_STORE);
  private readonly authService = inject(AuthService);
  private readonly ROUTER = inject(Router);
  public readonly isAuthenticated = this.store.isAuthenticated;
  public readonly accessToken = this.store.accessToken;

  public login(): void {
    if (this.isAuthenticated()) {
      return;
    } else {
      this.authService.login();
    }
  }

  public async exchangeCodeForToken(code: string): Promise<void> {
    this.store.setLoading(true);

    try {
      const tokenResponse = await firstValueFrom(this.authService.exchangeCodeForToken(code));
      this.authService.saveAccessTokenToRepo(tokenResponse.access_token);
      this.authService.saveExpireTimeAccessTokenToRepo(tokenResponse.expires_in);
      this.store.setToken(tokenResponse.access_token);
      this.store.setExpiresIn(Date.now() + tokenResponse.expires_in * 1000);
      this.store.setLoading(false);
      this.ROUTER.navigate(['/']);
    } finally {
      this.store.setLoading(false);
    }
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expire_in');
    localStorage.removeItem('selectedCenter');
    this.store.logout();
  }

  public async restoreSession() {
    const token = this.authService.getAccessTokenFromRepo();
    const expire_in = this.authService.getExpireTimeAccessTokenFromRepo();

    if (!token || !expire_in) {
      return;
    }

    this.store.setToken(token);
    this.store.setExpiresIn(Number(expire_in));
  }
}
