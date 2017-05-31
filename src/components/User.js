import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {
  fetchUser
} from '../actions/action-creators';
import colorVariables from '../constants/styles-variables';
import PropTypes from 'prop-types';

const {
  darkGrey
} = colorVariables;

const UserLink = styled.a`
  display: inline-block;
  margin: 5px auto;
  background-color: rgba(255, 255, 255, 1);
`;

const UserInfo = styled.ul`
  margin: 0 auto;
  padding: 1rem 0.7rem 0.7rem 0;
  text-align: right;
  color: ${darkGrey};
`;

class User extends React.Component {

  componentWillMount() {
    fetchUser();
  }

  render() {
    const {
      user
    } = this.props;

    const {
      image,
      name,
      playcount,
      registered,
      url
    } = user;

    const registeredElement = moment.unix(registered['#text']).format('MM/DD/YYYY');

    return (
      <UserLink
        href={url} target="_blank">
        <div>
          <img
            src={image['3']['#text']}
            alt={name} />
        </div>
        <UserInfo>
          <li>{name}</li>
          <li>{playcount}</li>
          <li>{registeredElement}</li>
        </UserInfo>
      </UserLink>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
