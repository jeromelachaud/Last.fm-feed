import React from 'react';
import './RecentTracks.css';
import RecentTrack from './RecentTrack.js';
import _map from 'lodash/map';
import _isEqual from 'lodash/isEqual';
import {
  fetchRecentTracks
} from '../actions/action-creators';

let RecentTracks = React.createClass ({

  shouldComponentUpdate(nextProps){
    return !_isEqual(nextProps.recentTracks,this.props.recentTracks);
  },

  componentWillMount() {
    fetchRecentTracks();
    // this.updateInterval = setInterval(() => fetchRecentTracks(2), 3000); 
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
