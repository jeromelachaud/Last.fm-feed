import React from 'react';
import './TopArtists.css';
import TopArtist from './TopArtist.js';
import _map from 'lodash/map';

let TopArtists = React.createClass ({

  render() {
    const {
      topArtists
    } = this.props;

    // let TopArtistElement;
    // if (topArtists) {
    //   TopArtistElement = _map(topArtists, (recentTrack, i) => (
    //     <TopArtist
    //       key={i}
    //       recentTrack={recentTrack} />
    //   ));
    // }

    return (
    <section
      className="TopArtists">
      {/* {TopArtistElement} */}
      TopArtists
    </section>
    );
  }
});

export default TopArtists;
