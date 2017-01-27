const signupRequest = () => ({
  type: 'SIGNUP_REQUEST',
});

const signupSuccess = response => ({
  type: 'SIGNUP_SUCCESS',
  response,
});

const signupFailure = error => ({
  type: 'SIGNUP_FAILURE',
  error,
});

function signup(signupData) {
  return (dispatch) => {
    dispatch(signupRequest());
    if (!signupData.email || !signupData.password) {
      dispatch(signupFailure('No crendentials set'));
      return null;
    }
    return fetch('http://www.socialhive.fr:4242/auth/signup', {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        email: signupData.email,
        password: signupData.password,
        first_name: 'Jean',
        last_name: 'Claude',
        username: 'jc',
      }),
    })
    .then(response => response.json())
    .then(async (response) => {
      await localStorage.setItem('id', response.id);
      await localStorage.setItem('rssninjatoken', response.token);
      dispatch(signupSuccess(response));
    })
    .catch((error) => { dispatch(signupFailure(error)); });
  };
}

export default signup;
