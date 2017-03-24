import React from 'react';
import './RecentTrack.css';
import lastfm_placeholder from './lastfm_placeholder.svg';

let RecentTrack = React.createClass ({

  render() {
    const {
      recentTrack
    } = this.props;
    
    const {
      artist,
      album,
      date,
      image
    } = recentTrack;

    const imageApiResponse = image['3']['#text'];
    
    let dateElement;
    if (date) {
      dateElement = (
        <li className="RecentTrack__date">{date['#text']}</li>
      );
    }
    let imageSource;
    if (imageApiResponse.length !== 0) {
      imageSource = (imageApiResponse);
    } else {
      imageSource = (lastfm_placeholder);
    }

    return (
      <ul
        className="RecentTrack">
        <li
          className="RecentTrack_item">
          <a href={recentTrack.url}>
            <img 
              src={imageSource} 
              alt={recentTrack.name} />
            <ul
              className="RecentTrack__info">
              <li><strong>{artist['#text']}</strong></li>
              <li>{recentTrack.name}</li>
              <li><em>{album['#text']}</em></li>
              {dateElement}
            </ul>
          </a>
        </li>
      </ul>
    );
  }
});

export default RecentTrack;
