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

    const registeredElement = moment.unix(registered['#text']).format('MM/DD/YYYY');

    return (
      <div
        className="User">
        <a
          className="User__link"
          href={url} target="blanck">
          <div>
            <img src={image[3]['#text']} />
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

User.propTypes = {
  user: React.PropTypes.shape({})
};

export default User;
