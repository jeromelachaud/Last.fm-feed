import React from 'react';
import lastfm_placeholder from '../assets/cover-album-placeholder.svg';
import PropTypes from 'prop-types';

class RecentTrack extends React.Component {

  render() {
    const {
      recentTrack
    } = this.props;

    const {
      artist,
      album,
      date,
      image,
      name,
      url
    } = recentTrack;

    const imageApiResponse = image['3']['#text'];

    let dateElement;
    if (date) {
      dateElement = (
        <div>{date['#text']}</div>
      );
    }
    let imageSource;
    if (imageApiResponse.length !== 0) {
      imageSource = (imageApiResponse);
    } else {
      imageSource = (lastfm_placeholder);
    }

    return (
      <a
        href={url}>
        <img
          src={imageSource}
          alt={name} />
        <ul>
          <li><strong>{artist['#text']}</strong></li>
          <li>{name}</li>
          <li><em>{album['#text']}</em></li>
          {dateElement}
        </ul>
      </a>
    );
  }
}

RecentTrack.propTypes = {
  recentTrack: PropTypes.object.isRequired
};

export default RecentTrack;
