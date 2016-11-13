import React from 'react';
import './RecentTracks.css';
import RecentTrack from './RecentTrack.js';
import _map from 'lodash/map';
import axios from 'axios';

import {
  apiConstants
} from '../constants/constants';
const {
  baseURL,
  apiKey,
  userName,
  getMethod
} = apiConstants;

let RecentTracks = React.createClass ({
  getInitialState: function() {
    return {
      recentTracks:[]
    };
  },

  componentDidMount() {
    let getRecentTracks = axios.create({
      getMethod,
      baseURL,
      url: `?format=json&method=user.getrecenttracks&user=${userName}&api_key=${apiKey}`
    });
    getRecentTracks()
    .then((recentTracks) => {
      this.setState({
        recentTracks: recentTracks.data.recenttracks.track
      });
    });
  },

  render() {
    const {
      recentTracks
    } = this.state;

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
