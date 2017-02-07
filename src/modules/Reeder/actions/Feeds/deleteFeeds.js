import APIPath from '../../../../config';

const deleteFeedsRequest = () => ({
  type: 'DELETE_FEEDS_REQUEST',
});

const deleteFeedsSuccess = (id, response) => ({
  type: 'DELETE_FEEDS_SUCCESS',
  response,
  id,
});

const deleteFeedsFailure = error => ({
  type: 'DELETE_FEEDS_FAILURE',
  error,
});

function deleteFeeds(id) {
  return (dispatch) => {
    dispatch(deleteFeedsRequest());
    return fetch(`${APIPath}/me/feeds/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
    .then((response) => {
      if (response.status !== 200) {
        dispatch(deleteFeedsFailure('Unable to delete feed'));
        return response;
      }
      return response.json();
    })
    .then((response) => {
      if (!response.status) {
        dispatch(deleteFeedsSuccess(id, response));
      }
    })
    .catch(() => { dispatch(deleteFeedsFailure('Unable to delete feed')); });
  };
}

export default deleteFeeds;
