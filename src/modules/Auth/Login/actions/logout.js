import APIPath from '../../../../config';

const logoutRequest = () => ({
  type: 'LOGOUT_REQUEST',
});

const logoutSuccess = response => ({
  type: 'LOGOUT_SUCCESS',
  response,
});

const logoutFailure = error => ({
  type: 'LOGOUT_FAILURE',
  error,
});

function logout() {
  return (dispatch) => {
    dispatch(logoutRequest());
    return fetch(`${APIPath}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    .then(async (response) => {
      await localStorage.removeItem('id');
      await localStorage.removeItem('token');
      location.reload();
      dispatch(logoutSuccess(response));
    })
    .catch((error) => { dispatch(logoutFailure(error)); });
  };
}

export default logout;
