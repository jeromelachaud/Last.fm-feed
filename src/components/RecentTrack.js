import React from 'react';
import styled from 'styled-components';
import lastfm_placeholder from '../assets/cover-album-placeholder.svg';
import colorVariables from '../constants/styles-variables';

const {
  darkGrey
} = colorVariables;

const RecentTrackLink = styled.a`
  display:block;
  margin-bottom: 2.5rem;

  &:link,
  &:visited {
    color: ${darkGrey};
    background-color: rgba(255, 255, 255, 1);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
    transition: background-color .25s ease-in-out;
  }

  @media screen and (min-width:1024px) {
    display: inline-flex;
  }
`;

const RecentTrackImage = styled.img`
  min-width: 300px;
  min-height: 300px;
`;

const RecentTrackInfo = styled.ul`
  padding: .75rem 1rem;
  width: 300px;
  line-height: 1.5;
`;
const RecentTrackDate = styled.li`
  font-size: 80%;
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
      <RecentTrackLink
        href={url}>
          <RecentTrackImage
            src={imageSource}
            alt={name} />
          <RecentTrackInfo>
            <li><strong>{artist['#text']}</strong></li>
            <li>{name}</li>
            <li><em>{album['#text']}</em></li>
              {dateElement}
          </RecentTrackInfo>
      </RecentTrackLink>
    );
  }
});

export default RecentTrack;
