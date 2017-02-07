import APIPath from '../../../../config';

import setError from '../setError';

const fetchFeedRequest = () => ({
  type: 'FETCH_FEED_REQUEST',
});

const fetchFeedSuccess = (id, response) => ({
  type: 'FETCH_FEED_SUCCESS',
  response,
  id,
});

const fetchFeedFailure = error => ({
  type: 'FETCH_FEED_FAILURE',
  error,
});

function fetchFeed(id) {
  return (dispatch) => {
    dispatch(fetchFeedRequest());
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
        dispatch(fetchFeedFailure('Unable to fetch feed'));
        dispatch(setError('Unable to fetch feed'));
        return response;
      }
      return response.json();
    })
    .then((response) => {
      if (!response.status) {
        dispatch(fetchFeedSuccess(id, response));
      }
      return response;
    })
    .catch(() => {
      dispatch(fetchFeedFailure('Unable to fetch feed'));
      dispatch(setError('Unable to fetch feed'));
    });
  };
}

export default fetchFeed;
