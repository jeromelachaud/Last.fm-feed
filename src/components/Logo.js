import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const LogoWrapper = styled.img `
   width: 5rem;
`;

let Logo = React.createClass ({

  render() {
    return (
      <LogoWrapper src={logo} alt="logo" />
    );
  }
});

export default Logo;
