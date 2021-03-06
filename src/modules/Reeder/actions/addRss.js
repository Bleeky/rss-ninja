import APIPath from '../../../config';

const addRssRequest = () => ({
  type: 'ADD_RSS_REQUEST',
});

const addRssSuccess = response => ({
  type: 'ADD_RSS_SUCCESS',
  response,
});

const addRssFailure = error => ({
  type: 'ADD_RSS_FAILURE',
  error,
});

function addRss(rssInfos) {
  return (dispatch) => {
    dispatch(addRssRequest());
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
      dispatch(addRssSuccess(response));
    })
    .catch((error) => { dispatch(addRssFailure(error)); });
  };
}

export default addRss;
