const pingRequest = () => ({
  type: 'PING_REQUEST',
});

const pingSuccess = response => ({
  type: 'PING_SUCCESS',
  response,
});

const pingFailure = error => ({
  type: 'PING_FAILURE',
  error,
});

function ping() {
  return (dispatch) => {
    dispatch(pingRequest());
    return fetch('http://www.socialhive.fr:4242/auth/ping', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(async (response) => {
      await localStorage.setItem('id', response.id);
      await localStorage.setItem('rssninjatoken', response.token);
      dispatch(pingSuccess(response));
    })
    .catch((error) => { dispatch(pingFailure(error)); });
  };
}

export default ping;