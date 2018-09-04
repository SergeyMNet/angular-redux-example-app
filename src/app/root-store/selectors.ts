import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  FeedStoreSelectors
} from './feed-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
    FeedStoreSelectors.selectFeedError, (feedError: string) => {
      return feedError; }
);

export const selectIsLoading: MemoizedSelector<object, boolean> =
 createSelector(FeedStoreSelectors.selectFeedIsLoading, (feed: boolean) => {
    return feed;
  }
);
