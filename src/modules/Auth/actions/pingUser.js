import APIPath from '../../../config';

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
    return fetch(`${APIPath}/auth/check`, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
    .then((response) => {
      if (response.status !== 200) {
        dispatch(pingFailure('Could not check if logged'));
        return response;
      }
      return response.json();
    })
    .then(async (response) => {
      if (response.id && response.token) {
        await localStorage.setItem('id', response.id);
        await localStorage.setItem('rssninjatoken', response.token);
        dispatch(pingSuccess(response));
      }
    })
    .catch(() => { dispatch(pingFailure()); });
  };
}

export default ping;
