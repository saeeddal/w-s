import { Injectable } from '@angular/core';
import type { IUserAuthentication } from '@app/shared/models/auth';
import type { IMenu } from '@app/shared/models/auth/menu-items.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthRepository {
  public saveAccessToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  public saveExpireTimeAccessToken(spanTime: number) {
    localStorage.setItem('expire_in', spanTime.toString());
  }

  public getAccessToken() {
    return localStorage.getItem('access_token');
  }
  public getExpireIn() {
    return localStorage.getItem('expire_in');
  }

  public saveUser(user: IUserAuthentication) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(): IUserAuthentication | null {
    const user = localStorage.getItem('user');

    return user ? JSON.parse(user) : null;
  }

  public saveMenuList(menuList: IMenu[]) {
    localStorage.setItem('menuList', JSON.stringify(menuList));
  }

  public getMenuList(): IMenu[] | null {
    const menuList = localStorage.getItem('menuList');

    return menuList ? JSON.parse(menuList) : null;
  }
}
