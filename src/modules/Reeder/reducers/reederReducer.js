export default function reederReducer(state = {
  feeds: [],
  feed: {},
  currentFeed: null,
  bookmarkedEntries: [],
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
        feed: state.currentFeed === action.id ? {} : state.feed,
      };
    case 'DELETE_RSS_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    case 'GET_BOOKMARKS_REQUEST':
      return {
        ...state,
      };
    case 'GET_BOOKMARKS_SUCCESS':
      return {
        ...state,
        bookmarkedEntries: action.response,
      };
    case 'GET_BOOKMARKS_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    case 'BOOKMARK_ENTRY_REQUEST':
      return {
        ...state,
      };
    case 'BOOKMARK_ENTRY_SUCCESS':
      return {
        ...state,
        bookmarkedEntries: [...state.bookmarkedEntries, action.response],
      };
    case 'BOOKMARK_ENTRY_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    case 'DELETE_BOOKMARK_REQUEST':
      return {
        ...state,
      };
    case 'DELETE_BOOKMARK_SUCCESS':
      return {
        ...state,
        bookmarkedEntries: action.response,
      };
    case 'DELETE_BOOKMARK_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    case 'CLEAN_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'RESET_FEED':
      return {
        ...state,
        error: null,
        feed: {},
      };
    case 'SET_FEED':
      return {
        ...state,
        error: null,
        feed: { items: action.feed },
        currentFeed: action.feedId,
      };
    default:
      return state;
  }
}
