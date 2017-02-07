export default function bookmarksReducer(state = {
  bookmarkedEntries: [],
}, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
