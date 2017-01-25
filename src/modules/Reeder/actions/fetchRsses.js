const fetchRssesRequest = () => ({
  type: 'FETCH_RSSES_REQUEST',
});

const fetchRssesSuccess = response => ({
  type: 'FETCH_RSSES_SUCCESS',
  response,
});

const fetchRssesFailure = error => ({
  type: 'FETCH_RSSES_FAILURE',
  error,
});

function fetchRsses() {
  return (dispatch, getState) => {
    dispatch(fetchRssesRequest());
    return fetch('http://www.socialhive.fr:4242/me/feeds', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getState().auth.token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      dispatch(fetchRssesSuccess(response));
    })
    .catch((error) => { dispatch(fetchRssesFailure(error)); });
  };
}

export default fetchRsses;
