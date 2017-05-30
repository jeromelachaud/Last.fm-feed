import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import Logo from './Logo';
import PropTypes from 'prop-types';

const TopBarWrapper = styled.div `
  position: fixed;
  display: flex;
  width: 100%;
  height: 10rem;
  z-index:2;
  background-color: #000;
`;

const LogoWrapper = styled.span`
  width: 5rem;
  height: 5rem;
  align-self: center;
  margin: 2rem;
`;

class TopBar extends React.Component {

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
}

TopBar.propTypes = {
  user: PropTypes.object.isRequired
};

export default TopBar;
