import React from 'react';
import './RecentTrack.css';

let RecentTrack = React.createClass ({

  render() {
    const {name} = this.props.name;
    const {url} = this.props.url;

    return (
      <ul
        className="RecentTrack">
        <li
          className="RecentTrack_item">
          <a href="">
            <img src={url} />
            <ul
              className="RecentTrack__info">
              <li>{name}</li>
            </ul>
          </a>
        </li>
      </ul>
    );
  }
});

export default RecentTrack;
