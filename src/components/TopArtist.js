import React from 'react';
import styled from 'styled-components';
import language from '../language';
import colorVariables from '../constants/styles-variables';

const {
  darkGrey
} = colorVariables;
const topArtistLanguage = language.components.topArtist;

const TopArtistWrapper = styled.a`
  display: inline-flex;
  position: relative;
  width: 300px;
  margin:0 2rem 2rem 0;
`;

const TopArtistInfoWrapper = styled.div`
  position:absolute;
  top:0;right:0;bottom:0;left:0;
  display: flex;
  color: white;
  background-color: rgba(255, 255, 255, .5);

  &:hover {
    background-color: rgba(0, 0, 0, 0);
    & > div {
      color: ${darkGrey};
    }
  }
`;

const TopArtistInfo =  styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  flex-grow: 1;
`;

let TopArtist = React.createClass ({

  propTypes: {
    topArtist: React.PropTypes.object.isRequired
  },

  render() {
    const {
      topArtist
    } = this.props;

    const {
      name,
      playcount,
      image,
      url
    } = topArtist;

    return (
      <TopArtistWrapper
        href={url}>
          <img
            src={image['3']['#text']}
            alt={topArtist.name}/>
          <TopArtistInfoWrapper>
            <TopArtistInfo>
              <div><strong>{name}</strong></div>
              <div><i>{playcount} {topArtistLanguage.playsKey}</i></div>
            </TopArtistInfo>
          </TopArtistInfoWrapper>
      </TopArtistWrapper>
    );
  }
});

export default TopArtist;
