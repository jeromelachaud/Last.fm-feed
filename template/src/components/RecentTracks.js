import React from 'react';
import './RecentTracks.css';
import RecentTrack from './RecentTrack.js';
import _map from 'lodash/map';

let RecentTracks = React.createClass ({

  render() {
    const recentTracks = this.props.recentTracks;

    let RecentTrackElement;
    if (recentTracks) {
      RecentTrackElement = _map(recentTracks, (name,url, i) => (
        <RecentTrack
          url={url}
          key={i}
          name={name} />
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
