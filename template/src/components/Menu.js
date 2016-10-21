import React from 'react';
import {
  Link
} from 'react-router';
import './Menu.css';
import User from './User';


let Menu = React.createClass ({

  handleClick: function() {
    console.log('foo');
  },

  render() {

    const {
      user
    } = this.props;

    return (
      <div>
        <ul>
          <li>
            <Link to="/recent-tracks" className="Menu__item">Latest track</Link>
          </li>
          <li>
            <a href="/top-artists" className="Menu__item">Top artists</a>
          </li>
          <li>
            <a href="#0" className="Menu__item">Charts</a>
          </li>
          <li>
            <a href="/" className="Menu__item" onClick={this.handleClick}>User infos</a>
          </li>
        </ul>
        <User
          user={user} />
      </div>
    );
  }
});

export default Menu;
