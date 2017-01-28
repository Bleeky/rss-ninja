import APIPath from '../../../config';

const getBookmarksRequest = () => ({
  type: 'GET_BOOKMARKS_REQUEST',
});

const getBookmarksSuccess = response => ({
  type: 'GET_BOOKMARKS_SUCCESS',
  response,
});

const getBookmarksFailure = error => ({
  type: 'GET_BOOKMARKS_FAILURE',
  error,
});

function getBookmarks() {
  return (dispatch) => {
    dispatch(getBookmarksRequest());
    return fetch(`${APIPath}/me/starred`, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
    .then((response) => {
      if (response.status !== 200) {
        dispatch(getBookmarksFailure('Unable to get bookmarks'));
        return response;
      }
      return response.json();
    })
    .then((response) => {
      if (!response.status) {
        dispatch(getBookmarksSuccess(response));
      }
    })
    .catch(() => { dispatch(getBookmarksFailure('Unable to get bookmarks')); });
  };
}

export default getBookmarks;
