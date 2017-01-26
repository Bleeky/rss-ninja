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
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'PING_REQUEST':
      return {
        ...state,
      };
    case 'PING_SUCCESS':
      return {
        ...state,
        token: action.token,
        id: action.id,
        isLogged: true,
      };
    case 'PING_FAILURE':
      return {
        ...state,
        token: null,
        id: null,
        isLogged: false,
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
