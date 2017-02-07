import APIPath from '../../../../config';

const deleteBookmarkRequest = () => ({
  type: 'DELETE_BOOKMARK_REQUEST',
});

const deleteBookmarkSuccess = response => ({
  type: 'DELETE_BOOKMARK_SUCCESS',
  response,
});

const deleteBookmarkFailure = error => ({
  type: 'DELETE_BOOKMARK_FAILURE',
  error,
});

function deleteBookmark(id) {
  return (dispatch) => {
    dispatch(deleteBookmarkRequest());
    return fetch(`${APIPath}/me/starred/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
    .then((response) => {
      if (response.status !== 200) {
        dispatch(deleteBookmarkFailure('Unable to delete bookmark'));
        return response;
      }
      return response.json();
    })
    .then((response) => {
      if (!response.status) {
        dispatch(deleteBookmarkSuccess(response));
      }
    })
    .catch(() => { dispatch(deleteBookmarkFailure('Unable to delete bookmark')); });
  };
}

export default deleteBookmark;
