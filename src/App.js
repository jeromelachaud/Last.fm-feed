import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledApp = styled.div`
  font-size: 2rem;
`;

class App extends React.Component {

  render() {
    const appElement = React.cloneElement(this.props.children);

    return (
      <StyledApp>
        {appElement}
      </StyledApp>
    );
  }
}

App.propTypes = {
  state: PropTypes.object,
  children: PropTypes.node.isRequired
};


export default App;
