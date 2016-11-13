import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router';
import App from './App';
import RecentTracks from './components/RecentTracks';
import TopArtists from './components/TopArtists';

let AppRouter = React.createClass ({

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={RecentTracks}/>
          <Route path="/recent-tracks" component={RecentTracks} />
          <Route path="/top-artists" component={TopArtists} />
        </Route>
      </Router>
    );
  }
});

export default AppRouter;
