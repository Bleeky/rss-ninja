export default function reederReducer(state = {
  feeds: [],
  feed: {},
  currentFeed: null,
}, action) {
  switch (action.type) {
    case 'FETCH_RSS_REQUEST':
      return {
        ...state,
        fetchingRss: true,
      };
    case 'FETCH_RSS_SUCCESS':
      return {
        ...state,
        feed: action.response,
        currentFeed: action.id,
        fetchingRss: false,
      };
    case 'FETCH_RSS_FAILURE':
      return {
        ...state,
        error: action.error,
        fetchingRss: false,
      };
    case 'FETCH_RSSES_REQUEST':
      return {
        ...state,
        fetchingRsses: true,
      };
    case 'FETCH_RSSES_SUCCESS':
      return {
        ...state,
        feeds: action.response,
        fetchingRsses: false,
      };
    case 'FETCH_RSSES_FAILURE':
      return {
        ...state,
        error: action.error,
        fetchingRsses: false,
      };
    case 'ADD_RSS_REQUEST':
      return {
        ...state,
      };
    case 'ADD_RSS_SUCCESS':
      return {
        ...state,
        feeds: [...state.feeds, action.response],
      };
    case 'ADD_RSS_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    case 'DELETE_RSS_REQUEST':
      return {
        ...state,
      };
    case 'DELETE_RSS_SUCCESS':
      return {
        ...state,
        feeds: action.response,
      };
    case 'DELETE_RSS_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    case 'CLEAN_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
