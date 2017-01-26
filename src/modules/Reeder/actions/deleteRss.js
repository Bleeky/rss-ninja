const deleteRssRequest = () => ({
  type: 'DELETE_RSS_REQUEST',
});

const deleteRssSuccess = (id, response) => ({
  type: 'DELETE_RSS_SUCCESS',
  response,
  id,
});

const deleteRssFailure = error => ({
  type: 'DELETE_RSS_FAILURE',
  error,
});

function deleteRss(id) {
  return (dispatch) => {
    dispatch(deleteRssRequest());
    return fetch(`http://www.socialhive.fr:4242/me/feeds/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
    .then((response) => {
      if (response.status !== 200) {
        dispatch(deleteRssFailure('Unable to delete feed'));
        return response;
      }
      return response.json();
    })
    .then((response) => {
      if (!response.status) {
        dispatch(deleteRssSuccess(id, response));
      }
    })
    .catch(() => { dispatch(deleteRssFailure('Unable to delete feed')); });
  };
}

export default deleteRss;
