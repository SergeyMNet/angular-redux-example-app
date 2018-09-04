import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  FeedStoreSelectors
} from './feed-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
    FeedStoreSelectors.selectFeedError,
  (jokeError: string) => {
    return jokeError;
  }
);

export const selectIsLoading: MemoizedSelector<object, boolean> =
 createSelector(FeedStoreSelectors.selectFeedIsLoading, (joke: boolean) => {
    return joke;
  }
);
