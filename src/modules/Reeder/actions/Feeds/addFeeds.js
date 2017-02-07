import APIPath from '../../../../config';

const addFeedsRequest = () => ({
  type: 'ADD_FEEDS_REQUEST',
});

const addFeedsSuccess = response => ({
  type: 'ADD_FEEDS_SUCCESS',
  response,
});

const addFeedsFailure = error => ({
  type: 'ADD_FEEDS_FAILURE',
  error,
});

function addFeeds(rssInfos) {
  return (dispatch) => {
    dispatch(addFeedsRequest());
    return fetch(`${APIPath}/me/feeds`, {
      method: 'PUT',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify({
        name: rssInfos.name,
        url: rssInfos.url,
      }),
    })
    .then(response => response.json())
    .then((response) => {
      dispatch(addFeedsSuccess(response));
    })
    .catch((error) => { dispatch(addFeedsFailure(error)); });
  };
}

export default addFeeds;
