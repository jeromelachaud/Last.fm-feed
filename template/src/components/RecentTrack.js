import React from 'react';
import './RecentTrack.css';

let RecentTrack = React.createClass ({

  render() {

    // const {
    //   artist,
    //   album
    // } = this.const.recentTracks

    return (
        <ul
          className="RecentTrack">
          <li
            className="RecentTrack_item">
            <a href="#0">
              <img src="" />
              <ul
                className="RecentTrack__info">
                {/* <li>{artist}</li>
                <li>{album}</li> */}
              </ul>
            </a>
          </li>
        </ul>
    );
  }
});

export default RecentTrack;
