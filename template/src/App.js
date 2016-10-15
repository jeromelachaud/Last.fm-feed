import React from 'react';
import Sidebar from './components/Sidebar';
import RecentTracks from './components/RecentTracks';
// import Lists from './components/Lists';
import './App.css';
import axios from 'axios';

const baseURL = 'http://ws.audioscrobbler.com/2.0/';
const apiKey = 'ce36645ab9a1ec3fc807f3ef8ef729b7';
const userName = 'PatBateman75';
const getMethod = 'get';

let App = React.createClass ({
  getInitialState: function() {
    return {
      user: [],
      recentTracks:[]
    };
  },

  componentDidMount() {
    function getRecentTracks() {
      return axios({
        getMethod,
        baseURL,
        url: `?format=json&method=user.getrecenttracks&user=${userName}&api_key=${apiKey}`
      });
    }
    function getUserInfo() {
      return axios({
        getMethod,
        baseURL,
        url: `?format=json&method=user.getinfo&user=${userName}&api_key=${apiKey}`
      });
    }
    axios.all([getRecentTracks(), getUserInfo()])
    .then(axios.spread((recentTracks, user) => {
      this.setState({
        recentTracks: recentTracks.data.recenttracks.track,
        user: user.data.user
      });
    }));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render() {
    let user = this.state.user;
    let recentTracks = this.state.recentTracks;

    return (
      <div className="App">
        <Sidebar
          user={user} />
        <RecentTracks
          recentTracks={recentTracks}/>
      </div>
    );
  }
});

App.propTypes = {
  state: React.PropTypes.shape({})
};

export default App;
