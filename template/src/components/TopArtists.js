import React from 'react';
import './TopArtists.css';
import TopArtist from './TopArtist.js';
import _map from 'lodash/map';
import axios from 'axios';

import {
  apiConstants
} from '../constants/constants';
const {
  baseURL,
  apiKey,
  userName,
  getMethod
} = apiConstants;

let TopArtists = React.createClass ({
  getInitialState: function() {
    return {
      topArtists:[]
    };
  },

  componentDidMount() {
    let getTopArtists = axios.create({
      getMethod,
      baseURL,
      url: `?format=json&method=user.gettopartists&user=${userName}&api_key=${apiKey}`
    });
    getTopArtists()
    .then((topArtists) => {
      this.setState({
        topArtists: topArtists.data.artist
      });
    });
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render() {
    const {
      topArtists
    } = this.state;

    let TopArtistElement;
      TopArtistElement = _map(topArtists, (topArtist, i) => (
        <TopArtist
          key={i}
          topArtist={topArtist} />
      ));

    return (
    <section
      className="TopArtists">
      TopArtists
      {TopArtistElement}
    </section>
    );
  }
});

export default TopArtists;
