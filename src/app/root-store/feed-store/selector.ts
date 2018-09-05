import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
  } from '@ngrx/store';

  import { ContentModel } from '../../models';
  import { feedAdapter, State } from './state';
import { AuthorModel } from '../../models/author.model';
import { FilterModel } from '../../models/filter.model';

  export const getError = (state: State): any => state.error;
  export const getIsLoading = (state: State): boolean => state.isLoading;
  export const getFeedList = (state: State): Array<ContentModel> => state.feedList;
  export const getAuthors = (state: State): Array<AuthorModel> => state.authors;
  export const getFilter = (state: State): FilterModel => state.filter;

  export const selectFeedState: MemoizedSelector<object, State> = createFeatureSelector<State>('feed');

  // Get All
  export const selectAllFeedItems: (state: object) =>
      ContentModel[] = feedAdapter.getSelectors(selectFeedState).selectAll;

  // Get by ID
  export const selectFeedById = (id: string) =>
    createSelector(this.selectAllFeedItems, (allFeed: ContentModel[]) => {
      if (allFeed) {
        return allFeed.find(p => p.id === id);
      } else {
        return null;
      }
    });

  // get Errors
  export const selectFeedError: MemoizedSelector<object, any> = createSelector(selectFeedState, getError);

  // isLoading
  export const selectFeedIsLoading: MemoizedSelector<object, boolean> = createSelector(selectFeedState, getIsLoading);

  // Get already filtered FeedList
  export const selectFeedList: MemoizedSelector<object, Array<ContentModel>> = createSelector(selectFeedState, getFeedList);

  // Get authors
  export const selectAuthors: MemoizedSelector<object, Array<AuthorModel>> = createSelector(selectFeedState, getAuthors);

  // Get Filter
  export const selectFilter: MemoizedSelector<object, FilterModel> = createSelector(selectFeedState, getFilter);
