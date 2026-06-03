import { Injectable } from '@angular/core';

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
}
