import React from 'react';
import store from './stores/lastfm-store';
import Sidebar from './components/Sidebar';
import './App.css';

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
      <div className="App">
        <Sidebar
          user={user} />
        {appElement}
      </div>
    );
  }
});

export default App;
