import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type MakePrescriptionState = {
  isLoading: boolean;
  error: string | null;
  totalCount: number; // for pagination
};

const initialState: MakePrescriptionState = {
  isLoading: false,
  error: null,
  totalCount: 0,
};

export const MAKE_PRESCRIPTION_STORE = signalStore(
  { providedIn: 'root' }, // or 'any' / lazy if feature is lazy-loaded

  withState(initialState),

  withMethods((store) => ({
    // Clear error / reset
    clearError: () => patchState(store, { error: null }),
  })),
);
