import React from 'react';
import Match from 'react-router/Match';
import App from './App';

export const routes = [
  {
    pattern: '/',
    exactly: true,
    component: App,
  },
];

export const MatchWithSubRoutes = route => (
  <Match {...route} render={props => <route.component {...props} routes={route.routes} />} />
);
