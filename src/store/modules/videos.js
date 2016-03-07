import apiRequest from '../../helpers/apiRequest';
import { VIDEOS_GRID_VIEW } from '../../helpers/constants';

const LOAD_VIDEOS = 'LOAD_VIDEOS';
const LOAD_VIDEOS_SUCCESS = 'LOAD_VIDEOS_SUCCESS';
const LOAD_VIDEOS_FAIL = 'LOAD_VIDEOS_FAIL';
const CHANGE_LIST_TYPE = 'CHANGE_LIST_TYPE';

const initialState = {
  list: [],
  nextPageToken: '',
  isLoading: false,
  artist: '',
  listType: VIDEOS_GRID_VIEW
};

// videos reducer { state :: state object, action :: dispatched action } -> new state
export default function videos(state = initialState, action = {}) {
  switch (action.type) {

    // change video list view (grid or list)
    case CHANGE_LIST_TYPE: {
      return {
        ...state,
        listType: action.payload
      };
    }

    // if loading next page -> clear list, else -> set the same list
    case LOAD_VIDEOS: {
      const { artist, isNextPage } = action.payload;
      return {
        ...state,
        artist: artist,
        list: isNextPage ? state.list : [],
        isLoading: true
      };
    }

    // if loading next page -> adding result to the end of existing list, else -> replace list
    case LOAD_VIDEOS_SUCCESS: {
      const { result, nextPageToken } = action.result;
      const { isNextPage } = action.payload;
      return {
        ...state,
        list: isNextPage ? state.list.concat(result) : result,
        nextPageToken: nextPageToken,
        isLoading: false
      };
    }

    default:
      return state;
  }
}

// load videos from API { artist :: String, nextPageToken :: String } -> Action
export function loadVideos(artist = '', nextPageToken = '') {
  return {
    types: [LOAD_VIDEOS, LOAD_VIDEOS_SUCCESS, LOAD_VIDEOS_FAIL],
    promise: () => apiRequest('get', '/videos', { params: { artist, nextPageToken} }),
    payload: {
      artist: artist,
      isNextPage: nextPageToken !== ''
    }
  };
}

// change video list view { listType :: String } -> Action
export function changeListType(listType) {
  return {
    type: CHANGE_LIST_TYPE,
    payload: listType
  };
}
