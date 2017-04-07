import React from 'react';
import {
  Link
} from 'react-router';
import styled from 'styled-components';
import User from './User';
import language from '../language/language';

const menuLanguage = language.components.menu;

const MenuItem = styled.li`
  a {
    cursor: pointer;
    color: rgba(255,255,255,1);
    font-weight: bold;

    &:hover,
    &:active {
      background-color: rgba(255,255,255,0.4);
    }
  }
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
      <User
        user={user} />
    );

    return (
      <div>
        <ul>
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
          <MenuItem>
            <Link
              id="toggleUser"
              onClick={this.toggleUser}>
              {menuLanguage.userInfo}
            </Link>
          </MenuItem>
        </ul>
        {this.state.showUser ? userElement : null}
      </div>
    );
  }
});

export default Menu;
