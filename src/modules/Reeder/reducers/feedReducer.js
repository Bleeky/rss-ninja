export default function feedReducer(state = {
  feed: {},
  currentFeedsEntry: null,
}, action) {
  switch (action.type) {
    case 'FETCH_FEED_REQUEST':
      return {
        ...state,
        fetchingFeed: true,
      };
    case 'FETCH_FEED_SUCCESS':
      return {
        ...state,
        feed: action.response,
        currentFeedsEntry: action.id,
        fetchingFeed: false,
      };
    case 'FETCH_FEED_FAILURE':
      return {
        ...state,
        error: action.error,
        fetchingFeed: false,
      };
    case 'SET_FEEDS_ENTRY':
      return {
        ...state,
        error: null,
        feed: { items: action.feed },
        currentFeedsEntry: action.feedsId,
      };
    case 'RESET_FEED':
      return {
        ...state,
        error: null,
        feed: {},
      };
    case 'DELETE_FEEDS_SUCCESS':
      return {
        ...state,
        feed: state.currentFeed === action.id ? {} : state.feed,
      };
    default:
      return state;
  }
}
