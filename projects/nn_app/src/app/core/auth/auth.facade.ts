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
  public readonly user = this.store.user;
  public readonly menuList = this.store.menuList;
  public readonly isLoading = this.store.isLoading;

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
      await this.ROUTER.navigateByUrl('/', { replaceUrl: true });
    } finally {
      this.store.setLoading(false);
    }
  }

  public async getUser(): Promise<void> {
    this.store.setLoading(true);
    try {
      const userResponse = await firstValueFrom(this.authService.getUser());
      this.authService.saveUserToRepo(userResponse);
      this.store.setUser(userResponse);
      this.store.setLoading(false);
    } finally {
      this.store.setLoading(false);
    }
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expire_in');
    localStorage.removeItem('selectedCenter');
    localStorage.removeItem('user');
    this.store.logout();
  }

  public async getMenuList(): Promise<void> {
    this.store.setLoading(true);
    try {
      const menuListResponse = await firstValueFrom(this.authService.getMenuList());
      this.authService.saveMenuListToRepo(menuListResponse.message.data);
      this.store.setMenuList(menuListResponse.message.data);
      this.store.setLoading(false);
    } catch (e: unknown) {
    } finally {
      this.store.setLoading(false);
    }
  }

  public async restoreSession() {
    // this.store.setLoading(true);
    // const token = this.authService.getAccessTokenFromRepo();
    // const expire_in = this.authService.getExpireTimeAccessTokenFromRepo();
    // const user = this.authService.getUserFromRepo();
    // const menuList = this.authService.getMenuListFromRepo();
    // if (token && expire_in) {
    //   this.store.setToken(token);
    //   this.store.setExpiresIn(Number(expire_in));
    // }
    // if (user) {
    //   this.store.setUser(user);
    // }
    // if (menuList) {
    //   this.store.setMenuList(menuList);
    // }
    // this.store.setLoading(false);
  }
}
