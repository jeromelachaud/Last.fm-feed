import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {
  fetchUser
} from '../actions/action-creators';

const UserWrapper = styled.div`
  display: inline-block;
  margin: 5px auto;
  font-size: 2rem;
`;

const UserLink = styled.a`
  display: inherit;;
  color: #fff;
  background-color: rgba(255,255,255,0.4);
`;

const UserInfo = styled.ul`
  margin: 0 auto;
  padding: 1rem 0.7rem 0.7rem 0;

  li {
    font-size: 1.5rem;
    font-style: italic;
    margin-right: 5px;
  }
`;


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
      image,
      name,
      playcount,
      registered,
      url
    } = user;

    const registeredElement = moment.unix(registered['#text']).format('MM/DD/YYYY');

    return (
      <UserWrapper>
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
      </UserWrapper>
    );
  }
});

export default User;
