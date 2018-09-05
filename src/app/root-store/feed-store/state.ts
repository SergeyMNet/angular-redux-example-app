import { createEntityAdapter, EntityAdapter, EntityState, Dictionary } from '@ngrx/entity';
import { ContentModel } from '../../models';
import { AuthorModel } from '../../models/author.model';

export const feedAdapter: EntityAdapter<ContentModel> =
    createEntityAdapter<ContentModel>({
      selectId: model => model.id,
      sortComparer: (a: ContentModel, b: ContentModel): number =>
        b.id.toString().localeCompare(a.id)
});

export interface State extends EntityState<ContentModel> {
  isLoading?: boolean;
  error?: any;
  feedList?: Array<ContentModel>;
  authors?: Array<AuthorModel>;
}

export const initialState: State = feedAdapter.getInitialState(
  {
    isLoading: false,
    error: null,
    feedList: [],
    authors: []
  }
);
