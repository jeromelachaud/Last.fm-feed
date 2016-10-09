import React from 'react';
import User from './User';
import Menu from './Menu';
import './Sidebar.css';
import logo from './logo.svg';


let Sidebar = React.createClass ({

  render() {

    const {
      name,
      playcount
    } = this.props.user;

    return (
      <div
        className="Sidebar">
        <img src={logo} className="Logo" alt="logo" />
        <Menu />
        <User
          name={name}
          playcount={playcount} />
      </div>
    );
  }
});

export default Sidebar;
