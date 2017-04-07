import React from 'react';
import styled from 'styled-components';

const TopArtistWrapper = styled.ul`
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

const TopArtistInfo = styled.ul`
  padding: 1rem 0 0.7rem 0.7rem;
  width: 300px;
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
      <TopArtistWrapper>
        <li>
          <a href={url}>
            <img
              src={image['3']['#text']}
              alt={topArtist.name}/>
            <TopArtistInfo>
              <li><strong>{name}</strong></li>
              <li><i>{playcount} plays</i></li>
            </TopArtistInfo>
          </a>
        </li>
      </TopArtistWrapper>
    );
  }
});

export default TopArtist;
