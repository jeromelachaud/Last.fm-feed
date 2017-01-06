import React from 'react';
import store from './stores/store';
import Sidebar from './components/Sidebar';
import './App.css';
import {
  fetchUser,
  fetchRecentTracks
} from './actions/actions';

let App = React.createClass ({

  componentWillMount() {
    this.setState(store.getState());
    fetchUser();
    fetchRecentTracks();
  },

  componentDidMount() {
    store.addChangeListener(() => this.setState(store.getState()));
  },

  componentWillUnmount() {
    this.serverRequest.abort();
  },

  render() {
    let user = this.state.user;
    let recentTracks = this.state.recentTracks;
    return (
      <div className="App">
        <Sidebar
          user={user} />
        {this.props.children}
      </div>
    );
  }
});

App.propTypes = {
  state: React.PropTypes.shape({}),
  children: React.PropTypes.node.isRequired
};

export default App;
