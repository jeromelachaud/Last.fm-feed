import React from 'react';
import './User.css';
import moment from 'moment';

let User = React.createClass ({

  render() {
    const {
      user
    } = this.props;

    const {
      name,
      playcount,
      registered,
      image
    } = user;

    let imageElement;
    if (image) {
      imageElement = (
        <img src={image['3']['#text']} />
      );
    }

    let registeredElement;
    if (registered) {
      registeredElement = moment.unix(registered['#text']).format('MM/DD/YYYY');
    }

    return (
      <div
        className="User">
        <div
          className="RecentTrack__image">
          {imageElement}
        </div>
        <ul
          className="User__info">
          <li>{name}</li>
          <li>{playcount}</li>
            <li>{registeredElement}</li>
        </ul>
      </div>
    );
  }
});

export default User;
