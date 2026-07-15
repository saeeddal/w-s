import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import type { Post } from './models/post';

type GuidState = {
  isLoading: boolean;
  error: string | null;
  totalCount: number; // for pagination
  post: Post | null;
  posts: Post[] | null;
};

const initialState: GuidState = {
  isLoading: false,
  error: null,
  totalCount: 0,
  post: null,
  posts: null,
};

export const GUID_STORE = signalStore(
  { providedIn: 'root' }, // or 'any' / lazy if feature is lazy-loaded

  withState(initialState),

  withMethods((store) => ({
    clearError: () => patchState(store, { error: null }),
    setLoading(isLoading: boolean) {
      patchState(store, {
        isLoading,
      });
    },
    setPost(post: Post) {
      patchState(store, {
        post,
      });
    },
    setPosts(posts: Post[]) {
      patchState(store, {
        posts,
      });
    },
  })),
);
