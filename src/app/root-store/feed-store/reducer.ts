import { Actions, ActionTypes, UseFilterAction, SetFavoriteAction } from './actions';
import { feedAdapter, initialState, State } from './state';
import { selectAllFeedItems } from './selector';
import { AuthorModel } from '../../models/author.model';
import { ContentModel } from '../../models';
import { FilterModel } from '../../models/filter.model';

export function feedReducer(state = initialState, action: Actions): State {

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
    case ActionTypes.USE_FILTER: {
      const list = useFilter(Object.values(state.entities), action.payload.filter);
      return {
        ...state,
        feedList: list,
        authors: state.authors,
        filter: action.payload.filter,
        isLoading: false,
        error: null
      };
    }
    case ActionTypes.SET_FAVORITE: {
      let list = setFavorite(Object.values(state.entities), action.payload.content);
      list = useFilter(list, state.filter);
      return {
        ...state,
        feedList: list,
        authors: state.authors,
        filter: state.filter,
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

function useFilter(state_list: Array<ContentModel>, filter: FilterModel): Array<ContentModel> {

  let list = [];

  if (filter.selAuthor.length > 0 && filter.isFavorites) {
    list = state_list.filter(i => i.author === filter.selAuthor && i.isFavorite === filter.isFavorites);
  } else if (filter.selAuthor.length > 0) {
    list = state_list.filter(i => i.author === filter.selAuthor);
  } else if (filter.isFavorites) {
    list = state_list.filter(i => i.isFavorite === filter.isFavorites);
  } else {
    list = state_list;
  }

  return list;
}

function setFavorite(list: Array<ContentModel>, content: ContentModel): Array<ContentModel> {
  return list.map(item => item.id === content.id ? Object.assign({}, item, content) : item);
}
