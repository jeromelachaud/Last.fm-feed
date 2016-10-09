import React from 'react';
import './RecentTracks.css';

let RecentTracks = React.createClass ({

  render() {
    // const {
    //   artist,
    //   album,
    //   date
    // } = this.props.track;

    return (
      <ul
        className="RecentTracks">
        <li
          className="RecentTracks_item">
          <a href="#0">
            <img src="" />
            <ul
              className="RecentTracks__info">
              {/* <li>{artist}</li>
              <li>{album}</li> */}
            </ul>
          </a>
        </li>
      </ul>
    );
  }
});

export default RecentTracks;
