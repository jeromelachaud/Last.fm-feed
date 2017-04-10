import React from 'react';
import styled from 'styled-components';
import lastfm_placeholder from '../assets/cover-album-placeholder.svg';

const RecentTrackItem  = styled.ul`
  margin-bottom: 5rem;

  a:link,
  a:visited {
    color: #111111;
    display: block;
    background-color: rgba(255, 255, 255, 0.8);
  }

  a:active {
    text-decoration: none;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 1);
    -webkit-transition: background-color .3s ease-in-out;
    transition: background-color .3s ease-in-out;
  }
`;
const RecentTrackInfo = styled.ul`
  padding: 1rem 0 0.7rem 0.7rem;
  width: 300px;
`;
const RecentTrackDate = styled.li`
  font-size: 80%
`;

let RecentTrack = React.createClass ({

  propTypes: {
    recentTrack: React.PropTypes.object.isRequired
  },

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
        <RecentTrackDate>{date['#text']}</RecentTrackDate>
      );
    }
    let imageSource;
    if (imageApiResponse.length !== 0) {
      imageSource = (imageApiResponse);
    } else {
      imageSource = (lastfm_placeholder);
    }

    return (
      <RecentTrackItem>
        <li>
          <a href={url}>
            <img
              src={imageSource}
              alt={name} />
            <RecentTrackInfo>
              <li><strong>{artist['#text']}</strong></li>
              <li>{name}</li>
              <li><em>{album['#text']}</em></li>
              {dateElement}
            </RecentTrackInfo>
          </a>
        </li>
      </RecentTrackItem>
    );
  }
});

export default RecentTrack;
