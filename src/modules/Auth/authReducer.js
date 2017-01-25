export default function authReducer(state = {
  isLogged: false,
}, action) {
  switch (action.type) {
    case 'SIGNUP_REQUEST':
      return {
        ...state,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        isLogged: true,
        id: action.response.id,
        token: action.response.token,
      };
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogged: true,
        id: action.response.id,
        token: action.response.token,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isLogged: false,
        id: null,
        token: null,
      };
    case 'LOGOUT_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
