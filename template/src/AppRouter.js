import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';
import App from './App';
import './index.css';

let AppRouter = React.createClass ({

  render() {
    return (
      <Router
        history={hashHistory}>
        <Route
          path="/"
          component={App}>
        </Route>
      </Router>
    );
  }
});

export default AppRouter;
