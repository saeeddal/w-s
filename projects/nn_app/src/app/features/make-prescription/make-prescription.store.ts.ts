import { inject } from '@angular/core';
import { ApiHttpService } from '@app/core/base-services/api-http.service';
import { HttpMethod } from '@app/core/base-services/models/http-method.enum';
import { IUser } from '@app/shared/models/common/mock.interface';
import { tapResponse } from '@ngrx/operators';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

import { pipe, switchMap, tap } from 'rxjs';

type MakePrescriptionState = {
  users: IUser[];
  selectedUser: IUser | null;
  isLoading: boolean;
  error: string | null;
  totalCount: number; // for pagination
};

const initialState: MakePrescriptionState = {
  users: [],
  selectedUser: null,
  isLoading: false,
  error: null,
  totalCount: 0,
};

export const MAKE_PRESCRIPTION_STORE = signalStore(
  { providedIn: 'root' }, // or 'any' / lazy if feature is lazy-loaded

  withState(initialState),

  withMethods((store, api = inject(ApiHttpService)) => ({
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

    // Clear error / reset
    clearError: () => patchState(store, { error: null }),
  }))
);
