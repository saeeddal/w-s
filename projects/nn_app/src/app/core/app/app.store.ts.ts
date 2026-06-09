import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Themes } from '../services/models/themes.enum';

type AppState = {
  dynamicHeaderTitle: string;
  isLoading: boolean;
  error: string | null;
  theme: Themes;
  sideBar: boolean;
};

const initialState: AppState = {
  isLoading: false,
  error: '',
  dynamicHeaderTitle: '',
  theme: Themes.LIGHT_THEME,
  sideBar: true,
};

export const APP_STORE = signalStore(
  { providedIn: 'root' }, // or 'any' / lazy if feature is lazy-loaded

  withState(initialState),
  withMethods((store) => {
    return {
      setDynamicHeaderTitle(dynamicHeaderTitle: string) {
        patchState(store, {
          dynamicHeaderTitle: dynamicHeaderTitle,
        });
      },
      toggleTheme() {
        patchState(store, {
          theme: store.theme() === Themes.LIGHT_THEME ? Themes.DARK_THEME : Themes.LIGHT_THEME,
        });
      },
      toggleSidebar() {
        patchState(store, {
          sideBar: !store.sideBar(),
        });
      },
      closeSidebar() {
        patchState(store, {
          sideBar: false,
        });
      },
    };
  }),
);
