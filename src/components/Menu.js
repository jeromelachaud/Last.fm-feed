import React from 'react';
import {
  Link
} from 'react-router';
import './Menu.css';
import User from './User';
import language from '../language/language';

const menuLanguage = language.components.menu;

let Menu = React.createClass ({

  getInitialState() {
    return { showUser: false };
  },

  toggleUser(e) {
    e.preventDefault(e);
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
          <li
            className="Menu__item">
            <Link
              to="recent-tracks">
              {menuLanguage.recentTracks}
            </Link>
          </li>
          <li
            className="Menu__item">
            <Link
              to="top-artists">
              {menuLanguage.topArtists}
            </Link>
          </li>
          <li
            className="Menu__item">
            <Link
              to="#0"
              onClick={this.toggleUser}>
              {menuLanguage.userInfo}
            </Link>
          </li>
        </ul>
        {this.state.showUser ? userElement : null}
      </div>
    );
  }
});

export default Menu;
