import type { IIdTitle } from '@app/shared/models/common/common.interface';
import type { ICenterItem } from '@app/shared/models/common/mock.interface';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type UsersState = {
  centerItems: ICenterItem[];
  isLoading: boolean;
  error: string | null;
  selectedCenter: IIdTitle | null;
};

const initialState: UsersState = {
  centerItems: [],
  isLoading: false,
  error: null,
  selectedCenter: null,
};

export const CENTER_STORE = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withMethods((store) => ({
    setSelectedCenter(selectedCenter: IIdTitle | null) {
      patchState(store, {
        selectedCenter: selectedCenter,
      });
    },
    clearError: () => patchState(store, { error: null }),
  })),
);
