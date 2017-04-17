import React from 'react';
import {
  store
} from './stores/lastfm-store';
import Topbar from './components/Topbar';
import styled from 'styled-components';

const StyledApp = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  font-size: 2rem;
`;

let App = React.createClass ({

  propTypes : {
    state: React.PropTypes.object,
    children: React.PropTypes.node.isRequired
  },

  componentWillMount() {
    this.setState(store.getState());
  },

  componentDidMount() {
    store.addChangeListener(() => this.setState(store.getState()));
  },

  componentWillUnmount() {
    this.serverRequest.abort();
  },

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
});

export default App;
