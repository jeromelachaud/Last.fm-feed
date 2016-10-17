import React from 'react';
import './RecentTrack.css';

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

    let dateElement;
    if (date) {
      dateElement = (
        <li className="RecentTrack__date">{date['#text']}</li>
      );
    }

    return (
      <ul
        className="RecentTrack">
        <li
          className="RecentTrack_item">
          <a href={recentTrack.url}>
            <img src={image['3']['#text']} />
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
