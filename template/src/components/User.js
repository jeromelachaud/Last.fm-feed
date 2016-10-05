import React from 'react';
import './User.css';
import logo from './logo.svg';
import axios from 'axios';

let User = React.createClass ({
  getInitialState: function() {
    return {
      data: []
    };
  },

  componentDidMount() {
    let instance = axios.create({
      url: '?format=json&method=user.getinfo&user=PatBateman75&api_key=ce36645ab9a1ec3fc807f3ef8ef729b7',
      baseURL: 'http://ws.audioscrobbler.com/2.0/'
    });
    instance()
    .then(function(response) {
      this.setState({data: response.data});
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render() {
    let displayUsername;
    if (this.state.data.user) {
      displayUsername = (
        <span>{this.state.data.user.name}</span>
      );
    }

    return (
      <div
        className="user">
        <img src={logo} className="logo" alt="logo" />
        {displayUsername}
      </div>
    );
  }
});

export default User;

