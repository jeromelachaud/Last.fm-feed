import React from 'react';
import User from './User';
import './Menu.css';
import logo from './logo.svg';

let Menu = React.createClass ({

  render() {

    return (
      <div
        className="Menu">
        <img src={logo} className="Logo" alt="logo" />
        <ul
          className="Menu__list">
          <li><a href="#0" className="Menu__item">Latest tracks</a></li>
          <li><a href="#0" className="Menu__item">Top artists</a></li>
          <li><a href="#0" className="Menu__item">Charts</a></li>
        </ul>
        <User/>
      </div>
    );
  }
});

export default Menu;
