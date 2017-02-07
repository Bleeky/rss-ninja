import APIPath from '../../../../config';

import setError from '../setError';

const fetchFeedsRequest = () => ({
  type: 'FETCH_FEEDS_REQUEST',
});

const fetchFeedsSuccess = response => ({
  type: 'FETCH_FEEDS_SUCCESS',
  response,
});

const fetchFeedsFailure = error => ({
  type: 'FETCH_FEEDS_FAILURE',
  error,
});

function fetchFeeds() {
  return (dispatch) => {
    dispatch(fetchFeedsRequest());
    return fetch(`${APIPath}/me/feeds`, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
    .then((response) => {
      if (response.status !== 200) {
        dispatch(fetchFeedsFailure('Unable to fetch feeds'));
        dispatch(setError('Unable to fetch feeds'));
        return response;
      }
      return response.json();
    })
    .then((response) => {
      if (!response.status) {
        dispatch(fetchFeedsSuccess(response));
      }
      return response;
    })
    .catch((error) => { dispatch(fetchFeedsFailure(error)); });
  };
}

export default fetchFeeds;
