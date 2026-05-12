import { inject } from '@angular/core';
import { ApiHttpService } from '@app/core/base-services/api-http.service';
import { HttpMethod } from '@app/core/base-services/models/http-method.enum';
import { ICenterItem } from '@app/shared/models/common/mock.interface';
import { tapResponse } from '@ngrx/operators';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

import { pipe, switchMap, tap } from 'rxjs';

type UsersState = {
  centerItems: ICenterItem[];
  isLoading: boolean;
  error: string | null;
};

const initialState: UsersState = {
  centerItems: [],
  isLoading: false,
  error: null,
};

export const CENTER_STORE = signalStore(
  { providedIn: 'root' }, // or 'any' / lazy if feature is lazy-loaded

  withState(initialState),

  withMethods((store, api = inject(ApiHttpService)) => ({
    loadCentersByUserId: rxMethod<{ userId: number }>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap((params) => {
          const req = {
            method: HttpMethod.POST, // even if not used in http.post
            endpoint: 'users/search',
            body: {
              userId: params.userId,
            },
          };

          // ← Use post$ → returns Observable → .pipe works
          return api.post$<{ centerItems: ICenterItem[] }>(req).pipe(
            tapResponse({
              next: ({ centerItems }) =>
                patchState(store, {
                  centerItems: centerItems,
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

    // Clear error / reset
    clearError: () => patchState(store, { error: null }),
  }))
);
