import React from 'react';
import { Provider } from 'react-redux';
import { Miss, BrowserRouter } from 'react-router';
import { routes, MatchWithSubRoutes } from './routes';
import store from './store';
import NotFound from './NotFound';

import './assets/scss/app.scss';

const AppRouter = ({ history }) => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <div>
        {
          routes.map((route, i) => (
            <MatchWithSubRoutes key={i} {...route} />
          ))
        }
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  </Provider>
);

AppRouter.propTypes = { history: React.PropTypes.func.isRequired };

export default AppRouter;
