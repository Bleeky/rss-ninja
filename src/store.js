import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import Reducers from './reducers';

const store = createStore(
  Reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

export default store;
