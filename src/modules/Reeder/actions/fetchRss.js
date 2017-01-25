const fetchRssRequest = () => ({
  type: 'FETCH_RSS_REQUEST',
});

const fetchRssSuccess = response => ({
  type: 'FETCH_RSS_SUCCESS',
  response,
});

const fetchRssFailure = error => ({
  type: 'FETCH_RSS_FAILURE',
  error,
});

function fetchRss(id) {
  return (dispatch, getState) => {
    dispatch(fetchRssRequest());
    return fetch(`http://www.socialhive.fr:4242/me/feed/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getState().auth.token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      dispatch(fetchRssSuccess(response));
    })
    .catch((error) => { dispatch(fetchRssFailure(error)); });
  };
}

export default fetchRss;
