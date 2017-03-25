import React from 'react';
import './User.css';
import moment from 'moment';
import {
  fetchUser
} from '../actions/action-creators';


let User = React.createClass ({

  propTypes: {
    user: React.PropTypes.object.isRequired
  },

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
    if (registered) {
      registeredElement = moment.unix(registered['#text']).format('MM/DD/YYYY');
    }

    let imageElement;
    if (image) {
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
              alt={name} />
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
