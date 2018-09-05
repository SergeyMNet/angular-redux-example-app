import { Action } from '@ngrx/store';
import { ContentModel } from '../../models';
import { FilterModel } from '../../models/filter.model';

export enum ActionTypes {
  LOAD_REQUEST = '[Feed] Load Request',
  LOAD_FAILURE = '[Feed] Load Failure',
  LOAD_SUCCESS = '[Feed] Load Success',

  SHOW_ALL       = '[Feed] Show All',
  SHOW_FAVORITES = '[Feed] Show Favorites',
  SHOW_BY_AUTHOR = '[Feed] Show by Author',
  USE_FILTER     = '[Feed] Use filter for feed',
  SET_FAVORITE   = '[Feed] Set favorite'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: Array<ContentModel> }) {}
}

export class ShowAllAction implements Action {
  readonly type = ActionTypes.SHOW_ALL;
  constructor() {}
}

export class UseFilterAction implements Action {
  readonly type = ActionTypes.USE_FILTER;
  constructor(public payload: { filter: FilterModel }) {}
}

export class SetFavoriteAction implements Action {
  readonly type = ActionTypes.SET_FAVORITE;
  constructor(public payload: { content: ContentModel }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction |
                      ShowAllAction | UseFilterAction | SetFavoriteAction;
