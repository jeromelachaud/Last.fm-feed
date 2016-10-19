import React from 'react';
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
            <a
              href="#0"
              className="Menu__item">
              Latest track
            </a>
          </li>
          <li>
            <a
              href="#0"
              className="Menu__item">
              Top artist
            </a>
          </li>
          <li>
            <a
              href="#0"
              className="Menu__item">
              Charts
            </a>
          </li>
          <li>
            <a
              href="#0"
              className="Menu__item"
              onClick={this.handleClick}>
              User infos
            </a>
          </li>
        </ul>
        <User
          user={user} />
      </div>
    );
  }
});

export default Menu;
