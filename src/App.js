import React from 'react';
import {
  store
} from './stores/lastfm-store';
import Topbar from './components/Topbar';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledApp = styled.div`
  font-size: 2rem;
`;

class App extends React.Component {

  componentWillMount() {
    this.setState(store.getState());
  }

  componentDidMount() {
    store.addChangeListener(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    let user = this.state.user;

    const appState = this.state;
    const appElement = React.cloneElement(this.props.children, { ...appState });

    return (
      <StyledApp>
        <Topbar
          user={user} />
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
