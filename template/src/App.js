import React from 'react';
import Menu from './components/Menu';
import User from './components/User';
import './App.css';
import axios from 'axios';

let App = React.createClass ({
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
    const Appstate = this.state.data.user;
    console.log(Appstate);

    return (
      <div className="App">
        <div className="App-header">
          <User
            name="joe">
          </User>
        </div>
        <Menu/>
      </div>
    );
  }
});

App.propTypes = {
  state: React.PropTypes.shape({})
};

export default App;
