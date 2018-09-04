import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
  } from '@ngrx/store';

  import { ContentModel } from '../../models';
  import { feedAdapter, State } from './state';

  export const getError = (state: State): any => state.error;
  export const getIsLoading = (state: State): boolean => state.isLoading;

  export const selectFeedState: MemoizedSelector<object, State> =
      createFeatureSelector<State>('feed');

  export const selectAllFeedItems: (state: object) =>
      ContentModel[] = feedAdapter.getSelectors(selectFeedState).selectAll;

  export const selectFeedById = (id: string) =>
    createSelector(this.selectAllJokeItems, (allFeed: ContentModel[]) => {
      if (allFeed) {
        return allFeed.find(p => p.id === id);
      } else {
        return null;
      }
    });

  export const selectFeedError: MemoizedSelector<object, any> = createSelector(
    selectFeedState,
    getError
  );

  export const selectFeedIsLoading: MemoizedSelector<
    object,
    boolean
  > = createSelector(selectFeedState, getIsLoading);
