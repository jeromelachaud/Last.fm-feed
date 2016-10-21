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
import './index.css';

let AppRouter = React.createClass ({

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={RecentTracks}/>
          <Route path="recenttracks" component={RecentTracks} />
          <Route path="topartists" component={TopArtists} />
        </Route>
      </Router>
    );
  }
});

export default AppRouter;
