import React from 'react';
import User from './User';
import Menu from './Menu';
import './Sidebar.css';
import logo from './logo.svg';


let Sidebar = React.createClass ({

  render() {

    const {
      user
    } = this.props;

    return (
      <div
        className="Sidebar">
        <img src={logo} className="Logo" alt="logo" />
        <Menu />
        <User
          user={user} />
      </div>
    );
  }
});

export default Sidebar;
