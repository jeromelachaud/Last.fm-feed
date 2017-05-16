import React from 'react';
import logo from '../assets/logo.svg';

let Logo = React.createClass ({

  render() {
    return (
      <img src={logo} alt="logo" />
    );
  }
});

export default Logo;
