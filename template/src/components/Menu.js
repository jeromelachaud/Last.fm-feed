import React from 'react';
import {
  Link
} from 'react-router';
import './Menu.css';
import User from './User';

let Menu = React.createClass ({

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
            <Link to="recent-tracks" className="Menu__item">Latest track</Link>
          </li>
          <li>
            <Link to="top-artists" className="Menu__item">Top artists</Link>
          </li>
          <li>
            <a href="#0" className="Menu__item">Charts</a>
          </li>
          <li>
            <a href="/" className="Menu__item" onClick={this.handleClick}>User infos</a>
          </li>
        </ul>
        {userElement}
      </div>
    );
  },

  handleClick: function() {
    // To-DO: toggle the display of the user card
  }

});

export default Menu;
