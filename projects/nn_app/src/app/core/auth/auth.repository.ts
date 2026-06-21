/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import type {
  ISidebarMenuItem,
  IUserAuthentication,
  IUserInfoResponse,
} from '@app/shared/models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthRepository {
  public saveAccessToken(token: string) {
    //localStorage.setItem('access_token', token);
  }

  public saveExpireTimeAccessToken(spanTime: number) {
    //localStorage.setItem('expire_in', spanTime.toString());
  }

  public getAccessToken(): string | null {
    //return localStorage.getItem('access_token');
    return null;
  }
  public getExpireIn(): string | null {
    //return localStorage.getItem('expire_in');
    return null;
  }

  public saveUser(user: IUserAuthentication) {
    //localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(): IUserInfoResponse | null {
    //const user = localStorage.getItem('user');

    //return user ? JSON.parse(user) : null;
    return null;
  }

  public saveMenuList(menuList: ISidebarMenuItem[]) {
    //localStorage.setItem('menuList', JSON.stringify(menuList));
  }

  public getMenuList(): ISidebarMenuItem[] | null {
    //const menuList = localStorage.getItem('menuList');

    //return menuList ? JSON.parse(menuList) : null;
    return null;
  }
}
