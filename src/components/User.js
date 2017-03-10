import React from 'react';
import './User.css';
import moment from 'moment';
import {
  fetchUser
} from '../actions/action-creators';


let User = React.createClass ({

  componentWillMount() {
    fetchUser();
  },

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

    let registeredElement;
    if (user.registered) {
      registeredElement = moment.unix(registered['#text']).format('MM/DD/YYYY');
    }

    let imageElement;
    if (user.image) {
      imageElement = image[3]['#text'];
    }

    return (
      <div
        className="User">
        <a
          className="User__link"
          href={url} target="blanck">
          <div>
            <img
              src={imageElement}
              alt={user.name} />
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
