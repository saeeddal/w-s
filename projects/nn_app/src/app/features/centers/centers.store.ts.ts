import type { IIdTitle } from '@app/shared/models/common/common.interface';
import type { ICenterInfo } from '@app/shared/models/dto/center/center-info.interface';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type UsersState = {
  isLoading: boolean;
  error: string | null;
  selectedCenter: ICenterInfo | null;
  centers: ICenterInfo[] | null;
};

const initialState: UsersState = {
  isLoading: false,
  error: null,
  selectedCenter: null,
  centers: null,
};

export const CENTER_STORE = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withMethods((store) => ({
    setSelectedCenter(selectedCenter: ICenterInfo | null) {
      patchState(store, {
        selectedCenter: selectedCenter,
      });
    },
    setCenters(centers: ICenterInfo[]) {
      patchState(store, {
        centers,
      });
    },
    clearError: () => patchState(store, { error: null }),
  })),
);
