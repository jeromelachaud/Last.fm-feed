import React from 'react';
import './RecentTracks.css';
import RecentTrack from './RecentTrack.js';
import _map from 'lodash/map';
import {
  fetchRecentTracks
} from '../actions/action-creators';

let RecentTracks = React.createClass ({

  componentWillMount() {
    fetchRecentTracks();
  },

  render() {

    const {
      recentTracks
    } = this.props;

    let RecentTrackElement;
    if (recentTracks) {
      RecentTrackElement = _map(recentTracks, (recentTrack, i) => (
        <RecentTrack
          key={i}
          recentTrack={recentTrack} />
      ));
    }

    return (
    <section
      className="RecentTracks">
      {RecentTrackElement}
    </section>
    );
  }
});

export default RecentTracks;
