const loginRequest = () => ({
  type: 'LOGIN_REQUEST',
});

const loginSuccess = response => ({
  type: 'LOGIN_SUCCESS',
  response,
});

const loginFailure = error => ({
  type: 'LOGIN_FAILURE',
  error,
});

function login(loginData) {
  return (dispatch) => {
    dispatch(loginRequest());
    return fetch('http://www.socialhive.fr:4242/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
    })
    .then((response) => {
      if (response.status !== 200) {
        dispatch(loginFailure('Could not login'));
        return response;
      }
      return response.json();
    })
    .then(async (response) => {
      if (response.id && response.token) {
        await localStorage.setItem('id', response.id);
        await localStorage.setItem('rssninjatoken', response.token);
        dispatch(loginSuccess(response));
      }
    })
    .catch((error) => { dispatch(loginFailure(error)); });
  };
}

export default login;
