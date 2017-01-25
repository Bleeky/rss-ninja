export default function reederReducer(state = {
  feeds: [],
  feed: [],
  currentFeed: {},
  currentFeedEntry: {},
}, action) {
  switch (action.type) {
    case 'FETCH_RSS_REQUEST':
      return {
        ...state,
      };
    case 'FETCH_RSS_SUCCESS':
      return {
        ...state,
        feed: action.response,
      };
    case 'FETCH_RSS_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    case 'FETCH_RSSES_REQUEST':
      return {
        ...state,
      };
    case 'FETCH_RSSES_SUCCESS':
      return {
        ...state,
        feeds: action.response,
      };
    case 'FETCH_RSSES_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
