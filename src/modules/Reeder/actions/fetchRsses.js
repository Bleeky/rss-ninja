import APIPath from '../../../config';

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
  return (dispatch) => {
    dispatch(fetchRssesRequest());
    return fetch(`${APIPath}/me/feeds`, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
    .then(response => response.json())
    .then((response) => {
      dispatch(fetchRssesSuccess(response));
    })
    .catch((error) => { dispatch(fetchRssesFailure(error)); });
  };
}

export default fetchRsses;
