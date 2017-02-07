export default function reederReducer(state = {
}, action) {
  switch (action.type) {
    case 'CLEAN_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
