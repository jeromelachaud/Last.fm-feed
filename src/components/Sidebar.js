import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import Logo from './Logo';

const SidebarWrapper = styled.div `
  width: 100%;
  position: relative;
  padding-bottom: 3rem;
  text-align: center;

  @media screen and (min-width: 990px) {
    width: auto;
    position: fixed;
    right: 20px;
    text-align: right;
  }
`;


let Sidebar = React.createClass ({

  propTypes: {
    user: React.PropTypes.object.isRequired
  },

  render() {
    const {
      user
    } = this.props;

    return (
      <SidebarWrapper>
        <Logo />
        <Menu
          user={user} />
      </SidebarWrapper>
    );
  }
});

export default Sidebar;
