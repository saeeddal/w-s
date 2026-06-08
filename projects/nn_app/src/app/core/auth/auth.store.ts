import { computed } from '@angular/core';
import type { IUserAuthentication } from '@app/shared/models/auth';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

type AuthState = {
  accessToken: string | null;
  isLoading: boolean;
  expiresAt: number | null;
  user: IUserAuthentication | null;
};

const initialState: AuthState = {
  accessToken: null,
  isLoading: false,
  expiresAt: null,
  user: null,
};

export const AUTH_STORE = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withMethods((store) => ({
    setToken(token: string) {
      patchState(store, {
        accessToken: token,
      });
    },
    setExpiresIn(expires_in: number) {
      patchState(store, {
        expiresAt: expires_in,
      });
    },

    setUser(user: IUserAuthentication) {
      patchState(store, {
        user: user,
      });
    },

    logout() {
      patchState(store, {
        accessToken: null,
        expiresAt: null,
        user: null,
      });
    },
    setLoading(isLoading: boolean) {
      patchState(store, {
        isLoading,
      });
    },
  })),

  withComputed((store) => ({
    isAuthenticated: computed(() => {
      const token = store.accessToken();
      const expiresAt = store.expiresAt();

      return !!token && !!expiresAt && Date.now() < expiresAt;
    }),

    isExpired: computed(() => {
      const expiresAt = store.expiresAt();

      return !expiresAt || Date.now() >= expiresAt;
    }),
  })),
);
