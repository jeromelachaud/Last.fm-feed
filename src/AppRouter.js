import React from 'react';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router';
import App from './App';
import RecentTracks from './components/RecentTracks';

class AppRouter extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={RecentTracks}/>
          <Route path="/recent-tracks" component={RecentTracks} />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
