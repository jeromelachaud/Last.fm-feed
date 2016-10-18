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
      image,
      url
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
        <a
          className="User__link"
          href={url} target="blanck">
          <div>
            {imageElement}
          </div>
          <ul
            className="User__info">
            <li>{name}</li>
            <li>{playcount}</li>
            <li>{registeredElement}</li>
          </ul>
        </a>
      </div>
    );
  }
});

export default User;
