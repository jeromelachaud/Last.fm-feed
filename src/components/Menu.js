import React from 'react';
import {
  Link
} from 'react-router';
import './Menu.css';
import User from './User';

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
            <Link to="recent-tracks" className="Menu__item">Latest Tracks</Link>
          </li>
          <li>
            <Link to="top-artists" className="Menu__item">Top Artists</Link>
          </li>
          <li>
            <Link className="Menu__item" onClick={this.onClick}>User Infos</Link>
          </li>
        </ul>
        {this.state.showUser ? userElement : null}
      </div>
    );
  }
});

export default Menu;
