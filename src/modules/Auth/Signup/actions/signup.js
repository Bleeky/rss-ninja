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
    return fetch('http://www.socialhive.fr:4242/auth/signup', {
      method: 'POST',
      // mode: 'no-cors',
      // credentials: 'include',
      // credentials: 'same-origin',
      headers: new Headers({
        Accept: 'application/json',
        // 'Access-Control-Allow-Headers': '*',
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Credentials': 'true',
      }),
      body: JSON.stringify({
        email: signupData.email,
        password: signupData.password,
        first_name: 'Jean',
        last_name: 'Claude',
        username: 'jc',
      }),
    })
    .then(async (response) => {
      console.log(response);
      await localStorage.setItem('id', response.id);
      await localStorage.setItem('rssninjatoken', response.token);
      dispatch(signupSuccess(response));
    })
    .catch((error) => { console.log('error', error); dispatch(signupFailure(error)); });
  };
}

export default signup;
