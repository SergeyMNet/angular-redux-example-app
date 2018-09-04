import { Action } from '@ngrx/store';
import { ContentModel } from '../../models';

export enum ActionTypes {
  LOAD_REQUEST = '[Feed] Load Request',
  LOAD_FAILURE = '[Feed] Load Failure',
  LOAD_SUCCESS = '[Feed] Load Success'
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
  constructor(public payload: { items: ContentModel[] }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;