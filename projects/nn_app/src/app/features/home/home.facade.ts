import { inject, Injectable } from '@angular/core';
import { HOME_STORE } from './home.store.ts.js';
import { ICreateUserDto, IUpdateUserDto } from '@app/shared/models/common/mock.interface.js';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  // Expose signals (readonly)
  public store = inject(HOME_STORE);
  public users = this.store.users;
  public selectedUser = this.store.selectedUser;
  public isLoading = this.store.isLoading;
  public error = this.store.error;
  public totalCount = this.store.totalCount;

  // Public methods
  public loadUsers(params?: { page?: number; search?: string; role?: string }) {
    this.store.loadUsers(params || {});
  }

  public loadUserById(id: number) {
    this.store.loadUserById(id);
  }

  public createUser(dto: ICreateUserDto) {
    this.store.createUser(dto);
  }

  public updateUser(dto: IUpdateUserDto) {
    this.store.updateUser(dto);
  }

  public deleteUser(id: number) {
    this.store.deleteUser(id);
  }

  public clearError() {
    this.store.clearError();
  }
}
