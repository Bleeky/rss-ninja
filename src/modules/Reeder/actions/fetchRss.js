import APIPath from '../../../config';

const fetchRssRequest = () => ({
  type: 'FETCH_RSS_REQUEST',
});

const fetchRssSuccess = (id, response) => ({
  type: 'FETCH_RSS_SUCCESS',
  response,
  id,
});

const fetchRssFailure = error => ({
  type: 'FETCH_RSS_FAILURE',
  error,
});

function fetchRss(id) {
  return (dispatch) => {
    dispatch(fetchRssRequest());
    return fetch(`${APIPath}/me/feeds/${id}`, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
    .then((response) => {
      if (response.status !== 200) {
        dispatch(fetchRssFailure('Unable to fetch feed'));
        return response;
      }
      return response.json();
    })
    .then((response) => {
      if (!response.status) {
        dispatch(fetchRssSuccess(id, response));
      }
    })
    .catch((error) => { dispatch(fetchRssFailure('Unable to fetch feed')); });
  };
}

export default fetchRss;
