import React from 'react';
import styled from 'styled-components';
import TopArtist from './TopArtist.js';
import _map from 'lodash/map';
import {
  fetchTopArtists
} from '../actions/action-creators';
import PropTypes from 'prop-types';

const TopArtistsWrapper = styled.section`
  max-width: 1500px;
  margin: 0 auto;
  padding: 10rem 0 0;
  text-align: center
`;

class TopArtists extends React.Component {

  componentWillMount() {
    fetchTopArtists();
  }

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
}

TopArtists.propTypes = {
  topArtists: PropTypes.array
};

export default TopArtists;
