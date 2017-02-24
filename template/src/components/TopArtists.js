import React from 'react';
import './TopArtists.css';
import TopArtist from './TopArtist.js';
import _map from 'lodash/map';
import {
  fetchTopArtists
} from '../actions/actions';

let TopArtists = React.createClass ({

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
    <section
      className="TopArtists">
      TopArtistElement
      {TopArtistElement}
    </section>
    );
  }
});

export default TopArtists;
