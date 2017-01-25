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
    return fetch('http://localhost:4242/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
    })
    .then(async (response) => {
      await localStorage.setItem('id', response.id);
      await localStorage.setItem('rssninjatoken', response.token);
      dispatch(loginSuccess(response));
    })
    .catch((error) => { dispatch(loginFailure(error)); });
  };
}

export default login;
