import React from 'react';
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
        <Menu
          user={user} />
      </div>
    );
  }
});

export default Sidebar;
