import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import axios from 'axios';

import {
  apiConstants
} from './constants/constants';
const {
  baseURL,
  apiKey,
  userName,
  getMethod
} = apiConstants;

let App = React.createClass ({

  getInitialState: function() {
    return {
      user: []
    };
  },

  componentDidMount() {
    let getUserInfo = axios.create({
      getMethod,
      baseURL,
      url: `?format=json&method=user.getinfo&user=${userName}&api_key=${apiKey}`
    });
    getUserInfo()
    .then((user) => {
      this.setState({
        user: user.data.user
      });
    });
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render() {
    let user = this.state.user;
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
