import { inject } from '@angular/core';
import { ApiHttpService } from '@app/core/base-services/api-http.service';
import { HttpMethod } from '@app/core/base-services/models/http-method.enum';
import { ICreateUserDto, IUpdateUserDto, IUser } from '@app/shared/models/common/mock.interface';
import { tapResponse } from '@ngrx/operators';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

import { pipe, switchMap, tap } from 'rxjs';

type UsersState = {
  users: IUser[];
  selectedUser: IUser | null;
  isLoading: boolean;
  error: string | null;
  totalCount: number; // for pagination
};

const initialState: UsersState = {
  users: [],
  selectedUser: null,
  isLoading: false,
  error: null,
  totalCount: 0,
};

export const HOME_STORE = signalStore(
  { providedIn: 'root' }, // or 'any' / lazy if feature is lazy-loaded

  withState(initialState),

  withMethods((store, api = inject(ApiHttpService)) => ({
    // Load list (with optional filters/pagination)
    loadUsers: rxMethod<{ page?: number; search?: string; role?: string }>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap((params) => {
          const req = {
            method: HttpMethod.POST, // even if not used in http.post
            endpoint: 'users/search',
            body: {
              page: params.page ?? 1,
              pageSize: 20,
              search: params.search,
              role: params.role,
            },
          };

          // ← Use post$ → returns Observable → .pipe works
          return api.post$<{ items: IUser[]; total: number }>(req).pipe(
            tapResponse({
              next: ({ items, total }) =>
                patchState(store, {
                  users: items,
                  totalCount: total,
                  isLoading: false,
                }),
              error: (err) =>
                patchState(store, {
                  //error: err?.message || 'Failed to load users',
                  error: (err || '').toString() || 'Failed to load users',
                  isLoading: false,
                }),
            })
          );
        })
      )
    ),

    // Load single user detail
    loadUserById: rxMethod<number>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap((id) => {
          const req = {
            method: HttpMethod.POST,
            endpoint: 'users/detail',
            body: { id },
          };
          return api.post$<IUser>(req).pipe(
            tapResponse({
              next: (user) => patchState(store, { selectedUser: user, isLoading: false }),
              error: (err) => patchState(store, { error: err ? err.toString() : '' }),
            })
          );
        })
      )
    ),

    // Create
    createUser: rxMethod<ICreateUserDto>(
      pipe(
        switchMap((dto) => {
          const req = {
            method: HttpMethod.POST,
            endpoint: 'posts',
            body: dto,
          };
          return api.post$<IUser>(req).pipe(
            tapResponse({
              next: (newUser) => {
                patchState(store, (state) => ({
                  users: [...state.users, newUser],
                  totalCount: state.totalCount + 1,
                }));
              },
              error: (err) => patchState(store, { error: err ? err.toString() : '' }),
            })
          );
        })
      )
    ),

    // Update (optimistic style possible, but simple version here)
    updateUser: rxMethod<IUpdateUserDto>(
      pipe(
        switchMap((dto) => {
          const req = {
            method: HttpMethod.POST,
            endpoint: 'users/update',
            body: dto,
          };
          return api.post$<IUser>(req).pipe(
            tapResponse({
              next: (updated) => {
                patchState(store, (state) => ({
                  users: state.users.map((u) => (u.id === updated.id ? updated : u)),
                  selectedUser:
                    state.selectedUser?.id === updated.id ? updated : state.selectedUser,
                }));
              },
              error: (err) => patchState(store, { error: err ? err.toString() : '' }),
            })
          );
        })
      )
    ),

    // Delete
    deleteUser: rxMethod<number>(
      pipe(
        switchMap((id) => {
          const req = {
            method: HttpMethod.POST,
            endpoint: 'users/delete',
            body: { id },
          };
          return api.post$<void>(req).pipe(
            tapResponse({
              next: () => {
                patchState(store, (state) => ({
                  users: state.users.filter((u) => u.id !== id),
                  totalCount: state.totalCount - 1,
                  selectedUser: state.selectedUser?.id === id ? null : state.selectedUser,
                }));
              },
              error: (err) => patchState(store, { error: err ? err.toString() : '' }),
            })
          );
        })
      )
    ),

    // Clear error / reset
    clearError: () => patchState(store, { error: null }),
  }))
);
