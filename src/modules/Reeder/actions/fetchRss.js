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
  return (dispatch) => {
    dispatch(fetchRssRequest());
    return fetch(`http://www.socialhive.fr:4242/me/feed/${id}`, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
    .then((response) => {
      dispatch(fetchRssSuccess(response));
    })
    .catch((error) => { dispatch(fetchRssFailure(error)); });
  };
}

export default fetchRss;
