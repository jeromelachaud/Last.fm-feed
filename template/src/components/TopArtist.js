import React from 'react';
import './TopArtist.css';

let TopArtist = React.createClass ({

  render() {
    const {
      topArtist
    } = this.props;

    const {
      artist,
      image,
      url
    } = topArtist;

    return (
      <ul
        className="TopArtist">
        <li
          className="TopArtist_item">
          <a href={url}>
            <img src={image['3']['#text']} />
            <ul
              className="TopArtist__info">
              <li><strong>{artist['#text']}</strong></li>
              <li>{topArtist.name}</li>
            </ul>
          </a>
        </li>
      </ul>
    );
  }
});

export default TopArtist;
