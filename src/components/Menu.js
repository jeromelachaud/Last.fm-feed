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

  onClick(e) {
    e.preventDefault(e);
    if (this.state.showUser === false) {
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
          <li>
            <Link
              to="recent-tracks"
              className="Menu__item">
              {menuLanguage.recentTracks}
            </Link>
          </li>
          <li>
            <Link
              to="top-artists"
              className="Menu__item">
              {menuLanguage.topArtists}
            </Link>
          </li>
          <li>
            <Link
              className="Menu__item"
              onClick={this.onClick}>
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
