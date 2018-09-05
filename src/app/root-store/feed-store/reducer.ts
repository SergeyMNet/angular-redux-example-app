import { Actions, ActionTypes, UseFilterAction } from './actions';
import { feedAdapter, initialState, State } from './state';
import { selectAllFeedItems } from './selector';
import { AuthorModel } from '../../models/author.model';
import { ContentModel } from '../../models';
import { FilterModel } from '../../models/filter.model';

export function feedReducer(state = initialState, action: Actions): State {

  console.log(state);
  console.log(action);

  switch (action.type) {
    case ActionTypes.LOAD_REQUEST: {
      return {
        ...state,
        feedList: [],
        authors: [],
        filter: new FilterModel(),
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
        filter: new FilterModel(),
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.LOAD_FAILURE: {
      return {
        ...state,
        feedList: [],
        authors: state.authors,
        filter: new FilterModel(),
        isLoading: false,
        error: action.payload.error
      };
    }
    case ActionTypes.SHOW_ALL: {
      return {
        ...state,
        feedList: Object.values(state.entities),
        authors: state.authors,
        filter: new FilterModel(),
        isLoading: false,
        error: null
      };
    }
    // case ActionTypes.SHOW_FAVORITES: {
    //   return {
    //     ...state,
    //     feedList: Object.values(state.entities).filter(i => i.isFavorite),
    //     authors: state.authors,
    //     isLoading: false,
    //     error: null
    //   };
    // }
    // case ActionTypes.SHOW_BY_AUTHOR: {
    //   return {
    //     ...state,
    //     feedList: Object.values(state.entities).filter(i => i.author === action.payload.author),
    //     authors: state.authors,
    //     filter: new FilterModel(),
    //     isLoading: false,
    //     error: null
    //   };
    // }
    case ActionTypes.USE_FILTER: {
      const list = useFilter(state, action);
      return {
        ...state,
        feedList: list,
        authors: state.authors,
        filter: action.payload.filter,
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

function useFilter(state: State, action: UseFilterAction): Array<ContentModel> {

  let list = [];

  if (action.payload.filter.selAuthor.length > 0) {
    list = Object.values(state.entities).filter(i => i.author === action.payload.filter.selAuthor);
  } else {
    list = Object.values(state.entities);
  }

  if (action.payload.filter.isFavorites) {
    list = list.filter(i => i.isFavorite);
  }

  return list;
}
