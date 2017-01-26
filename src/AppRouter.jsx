import React from 'react';
import { Provider } from 'react-redux';
import { Miss, BrowserRouter } from 'react-router';
import { routes, MatchWithSubRoutes } from './routes';
import store from './store';
import NotFound from './NotFound';

import './assets/scss/app.scss';

const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
      {({ router }) => (
        <div>
          {
          routes.map((route, i) => (
            <MatchWithSubRoutes key={i} {...route} router={router} />
          ))
        }
          <Miss component={NotFound} />
        </div>
        )}
    </BrowserRouter>
  </Provider>
);

export default AppRouter;
