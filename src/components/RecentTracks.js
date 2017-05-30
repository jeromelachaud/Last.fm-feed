import React from 'react';
import styled from 'styled-components';
import RecentTrack from './RecentTrack.js';
import _map from 'lodash/map';
import _isEqual from 'lodash/isEqual';
import {
  fetchRecentTracks
} from '../actions/action-creators';
import PropTypes from 'prop-types';

const RecentTrackWrapper = styled.section`
  width: 30rem;
  margin: 0 auto;
  padding: 10rem 0 0 0;

  @media screen and (min-width:1024px) {
    width: 60rem;
  }
`;

class RecentTracks extends React.Component {

  shouldComponentUpdate(nextProps){
    return !_isEqual(nextProps.recentTracks,this.props.recentTracks);
  }

  componentWillMount() {
    fetchRecentTracks();
    // this.updateInterval = setInterval(() => fetchRecentTracks(2), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  render() {

    const {
      recentTracks
    } = this.props;

    const RecentTrackElement = _map(recentTracks, (recentTrack, i) => (
      <RecentTrack
        key={i}
        recentTrack={recentTrack} />
    ));

    return (
    <RecentTrackWrapper>
      {RecentTrackElement}
    </RecentTrackWrapper>
    );
  }
}

RecentTracks.propTypes = {
  recentTracks: PropTypes.array
};

export default RecentTracks;
