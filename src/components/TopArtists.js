import React from 'react';
import styled from 'styled-components';
import TopArtist from './TopArtist.js';
import _map from 'lodash/map';
import {
  fetchTopArtists
} from '../actions/action-creators';

const TopArtistsWrapper = styled.section`
  max-width: 1500px;
  margin: 0 auto;
  padding: 10rem 0 0;
  text-align: center
`;
let TopArtists = React.createClass ({
  propTypes: {
    topArtists: React.PropTypes.array
  },

  componentWillMount() {
    fetchTopArtists();
  },

  render() {
    const {
      topArtists
    } = this.props;

    let TopArtistElement;
    if (topArtists) {
      TopArtistElement = _map(topArtists, (topArtist, i) => (
        <TopArtist
          key={i}
          topArtist={topArtist} />
      ));
    }

    return (
    <TopArtistsWrapper>
      {TopArtistElement}
    </TopArtistsWrapper>
    );
  }
});

export default TopArtists;
