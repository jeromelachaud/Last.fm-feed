import React from 'react';
import './RecentTracks.css';
import RecentTrack from './RecentTrack.js';
import _map from 'lodash/map';

let RecentTracks = React.createClass ({

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
