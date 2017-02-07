export default function feedEntryReducer(state = {
  feedEntry: {},
  iframeVisible: false,
}, action) {
  switch (action.type) {
    case 'SET_FEED_ENTRY':
      return {
        ...state,
        feedEntry: action.feedEntry,
      };
    case 'SHOW_IFRAME':
      return {
        ...state,
        iframeVisible: action.status,
      };
    default:
      return state;
  }
}
