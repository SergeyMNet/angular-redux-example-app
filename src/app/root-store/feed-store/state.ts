import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ContentModel } from '../../models';

export const feedAdapter: EntityAdapter<ContentModel> =
    createEntityAdapter<ContentModel>({
      selectId: model => model.id,
      sortComparer: (a: ContentModel, b: ContentModel): number =>
        b.id.toString().localeCompare(a.id)
});

export interface State extends EntityState<ContentModel> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = feedAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
