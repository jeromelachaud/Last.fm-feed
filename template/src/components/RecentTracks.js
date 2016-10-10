import React from 'react';
import './RecentTracks.css';
import _map from 'lodash/map';

let RecentTracks = React.createClass ({

  render() {
    const recentTracks = this.props.recentTracks;

    // const recentTracksItems =

    return (
    <section>

      {recentTracksItems}

    </section>
    );
  }
});

export default RecentTracks;
