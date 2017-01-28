import APIPath from '../../../config';

const bookmarkEntryRequest = () => ({
  type: 'BOOKMARK_ENTRY_REQUEST',
});

const bookmarkEntrySuccess = response => ({
  type: 'BOOKMARK_ENTRY_SUCCESS',
  response,
});

const bookmarkEntryFailure = error => ({
  type: 'BOOKMARK_ENTRY_FAILURE',
  error,
});

function bookmarkEntry(entry) {
  return (dispatch) => {
    dispatch(bookmarkEntryRequest());
    return fetch(`${APIPath}/me/starred`, {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(entry),
    })
    .then((response) => {
      if (response.status !== 200) {
        dispatch(bookmarkEntryFailure('Unable to add bookmark'));
        return response;
      }
      return response.json();
    })
    .then((response) => {
      if (!response.status) {
        dispatch(bookmarkEntrySuccess(response));
      }
    })
    .catch(() => { dispatch(bookmarkEntryFailure('Unable to add bookmark')); });
  };
}

export default bookmarkEntry;
