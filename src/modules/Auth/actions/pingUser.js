const pingRequest = () => ({
  type: 'PING_REQUEST',
});

const pingSuccess = response => ({
  type: 'PING_SUCCESS',
  response,
});

const pingFailure = () => ({
  type: 'PING_FAILURE',
});

function ping() {
  return (dispatch) => {
    dispatch(pingRequest());
    return fetch('http://www.socialhive.fr:4242/auth/check', {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
    .then(async (response) => {
      if (response.status === 200) {
        await localStorage.setItem('id', response.id);
        await localStorage.setItem('rssninjatoken', response.token);
        dispatch(pingSuccess(response));
      } else {
        dispatch(pingFailure());
      }
    })
    .catch(() => { dispatch(pingFailure()); });
  };
}

export default ping;
