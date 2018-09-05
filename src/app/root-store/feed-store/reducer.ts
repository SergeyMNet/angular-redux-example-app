import { Actions, ActionTypes } from './actions';
import { feedAdapter, initialState, State } from './state';
import { selectAllFeedItems } from './selector';
import { AuthorModel } from '../../models/author.model';

export function feedReducer(state = initialState, action: Actions): State {

  console.log(state);
  console.log(action);

  switch (action.type) {
    case ActionTypes.LOAD_REQUEST: {
      return {
        ...state,
        feedList: [],
        authors: [],
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_SUCCESS: {
      const authors = getAuthors(action.payload.items);
      return feedAdapter.addAll(action.payload.items, {
        ...state,
        feedList: action.payload.items,
        authors: authors,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.LOAD_FAILURE: {
      return {
        ...state,
        feedList: [],
        authors: state.authors,
        isLoading: false,
        error: action.payload.error
      };
    }
    case ActionTypes.SHOW_ALL: {
      return {
        ...state,
        feedList: Object.values(state.entities),
        authors: state.authors,
        isLoading: false,
        error: null
      };
    }
    case ActionTypes.SHOW_FAVORITES: {
      return {
        ...state,
        feedList: Object.values(state.entities).filter(i => i.isFavorite),
        authors: state.authors,
        isLoading: false,
        error: null
      };
    }
    case ActionTypes.SHOW_BY_AUTHOR: {
      return {
        ...state,
        feedList: Object.values(state.entities).filter(i => i.author === action.payload.author),
        authors: state.authors,
        isLoading: false,
        error: null
      };
    }
    default: {
      return state;
    }
  }
}

function getAuthors(items: Array<any>): Array<AuthorModel> {

  const allAuthors = items.map(i => new AuthorModel(i.author));
  return allAuthors.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj['name']).indexOf(obj['name']) === pos;
  });
}
