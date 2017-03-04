import dispatcher from '../dispatcher/dispatcher';
import actionType from '../constants/actions-type';

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


export function fetchUser() {
  let getUserInfo = axios.create({
    getMethod,
    baseURL,
    url: `?format=json&method=user.getinfo&user=${userName}&api_key=${apiKey}`
  });
  getUserInfo()
  .then((response) => {
    dispatcher.dispatch({
      type: actionType.userRetrieved,
      user: response.data.user
    });
  });
}

export function fetchRecentTracks() {
  let getRecentTracks = axios.create({
    getMethod,
    baseURL,
    url: `?format=json&method=user.getrecenttracks&user=${userName}&api_key=${apiKey}`
  });
  getRecentTracks()
  .then((response) => {
    dispatcher.dispatch({
      type: actionType.recentTracksRetreived,
      recentTracks: response.data.recenttracks.track
    });
  });
}

export function fetchTopArtists() {
  let getTopArtists = axios.create({
    getMethod,
    baseURL,
    url: `?format=json&method=user.gettopartists&user=${userName}&api_key=${apiKey}`
  });
  getTopArtists()
  .then((response) => {
    dispatcher.dispatch({
      type: actionType.topArtistsRetreived,
      topArtists: response.data.topartists.artist
    });
  });
}
