import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppRouter from './AppRouter';

const rootElement = document.getElementById('root');
ReactDOM.render(
  (<AppContainer>
    <AppRouter />
  </AppContainer>),
  rootElement,
);

if (module.hot) {
  module.hot.accept('./AppRouter', () => {
    const NextAppRouter = require('./AppRouter').default; // eslint-disable-line global-require

    ReactDOM.render(
      (<AppContainer>
        <NextAppRouter />
      </AppContainer>),
      rootElement,
    );
  });
}
