import React from 'react';
import Match from 'react-router/Match';
import App from './AppContainer';
import Signup from './modules/Auth/Signup';

export const routes = [
  {
    pattern: '/',
    exactly: true,
    component: App,
  },
  {
    pattern: '/signup',
    exactly: true,
    component: Signup,
  },
];

export const MatchWithSubRoutes = route => (
  <Match
    {...route} render={props =>
      <route.component {...props} routes={route.routes} router={route.router} />
    }
  />
  );
