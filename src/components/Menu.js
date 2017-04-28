import React from 'react';
import {
  Link
} from 'react-router';
import styled from 'styled-components';
import User from './User';
import language from '../language';

const menuLanguage = language.components.menu;

const MenuWrapper = styled.ul`
  display: flex;
  flex-grow: 1;
  align-items: center;

  a {
    cursor: pointer;
    font-weight: bold;
    font-size: 1.75rem;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);

    &:hover,
    &:active {
      color: rgba(255,255,255,1);
      transition: color .25s ease-in-out;
    }
  }
`;

const MenuItem = styled.li`
  padding: 0 2rem 0 0;
`;

const LinkUserWrapper = styled.li`
  display: flex;
  flex-grow: 1;
  flex-direction: row-reverse;
  padding: 0 2rem 0 0;
`;

const UserWrapper = styled.div`
  position: fixed;
  top: 9.5rem;
  right: 0;

  a {
    text-transform: none;
  };
`;

let Menu = React.createClass ({

  propTypes: {
    user: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return { showUser: false };
  },

  toggleUser() {
    if (!this.state.showUser) {
      this.setState({showUser : true});
    } else {
      this.setState({showUser : false});
    }
  },

  render() {

    const {
      user
    } = this.props;

    let userElement;
    userElement = (
      <UserWrapper>
        <User
          user={user} />
      </UserWrapper>
    );

    return (
      <MenuWrapper>
        <MenuItem>
          <Link
            to="recent-tracks">
            {menuLanguage.recentTracks}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="top-artists">
            {menuLanguage.topArtists}
          </Link>
        </MenuItem>
          <LinkUserWrapper>
            <Link
              id="toggleUser"
              onClick={this.toggleUser}>
              {menuLanguage.userInfo}
            </Link>
          </LinkUserWrapper>
        {this.state.showUser ? userElement : null}
      </MenuWrapper>

    );
  }
});

export default Menu;
