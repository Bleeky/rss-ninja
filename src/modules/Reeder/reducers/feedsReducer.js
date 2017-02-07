export default function feedsReducer(state = {
  feeds: [],
}, action) {
  switch (action.type) {
    case 'FETCH_FEEDS_REQUEST':
      return {
        ...state,
        fetchingFeeds: true,
      };
    case 'FETCH_FEEDS_SUCCESS':
      return {
        ...state,
        feeds: action.response,
        fetchingFeeds: false,
      };
    case 'FETCH_FEEDS_FAILURE':
      return {
        ...state,
        error: action.error,
        fetchingFeeds: false,
      };
    case 'ADD_FEEDS_REQUEST':
      return {
        ...state,
      };
    case 'ADD_FEEDS_SUCCESS':
      return {
        ...state,
        feeds: [...state.feeds, action.response],
      };
    case 'ADD_FEEDS_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    case 'DELETE_FEEDS_REQUEST':
      return {
        ...state,
      };
    case 'DELETE_FEEDS_SUCCESS':
      return {
        ...state,
        feeds: action.response,
      };
    case 'DELETE_FEEDS_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
