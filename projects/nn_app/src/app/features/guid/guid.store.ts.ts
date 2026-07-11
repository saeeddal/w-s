import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type GuidState = {
  isLoading: boolean;
  error: string | null;
  totalCount: number; // for pagination
};

const initialState: GuidState = {
  isLoading: false,
  error: null,
  totalCount: 0,
};

export const GUID_STORE = signalStore(
  { providedIn: 'root' }, // or 'any' / lazy if feature is lazy-loaded

  withState(initialState),

  withMethods((store) => ({
    clearError: () => patchState(store, { error: null }),
  })),
);
