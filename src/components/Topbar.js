import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import Logo from './Logo';

const TopBarWrapper = styled.div `
  position: fixed;
  display: flex;
  width: 100%;
  height: 10rem;
  background-color: #000;
`;

const LogoWrapper = styled.span`
  width: 5rem;
  height: 5rem;
  align-self: center;
  margin: 2rem;
`;

let TopBar = React.createClass ({

  propTypes: {
    user: React.PropTypes.object.isRequired
  },

  render() {
    const {
      user
    } = this.props;

    return (
      <TopBarWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Menu
          user={user} />
      </TopBarWrapper>
    );
  }
});

export default TopBar;
