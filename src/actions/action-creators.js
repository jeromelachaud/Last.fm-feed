import lastfmStore from '../stores/lastfm-store/';
import axios from 'axios';
import {
  apiConstants
} from '../constants/api-constants';
const {
  baseURL,
  apiKey,
  userName
} = apiConstants;

export function fetchUser() {
  let getUserInfo = axios.create({
    baseURL,
    url: `?format=json&method=user.getinfo&user=${userName}&api_key=${apiKey}`
  });
  getUserInfo()
  .then((response) => {
    console.log(response);
    lastfmStore.addTrack(response)
  });
}

export function fetchRecentTracks(limit) {
  let getRecentTracks = axios.create({
    baseURL,
    url: `?format=json&method=user.getrecenttracks&user=${userName}&limit=${limit}&api_key=${apiKey}`
  });
  getRecentTracks()
  .then((response) => {
    dispatcher.dispatch({
      type: actionTypes.recentTracksRetreived,
      recentTracks: response.data.recenttracks.track
    });
  });
}

export function fetchTopArtists() {
  let getTopArtists = axios.create({
    baseURL,
    url: `?format=json&method=user.gettopartists&user=${userName}&api_key=${apiKey}`
  });
  getTopArtists()
  .then((response) => {
    dispatcher.dispatch({
      type: actionTypes.topArtistsRetreived,
      topArtists: response.data.topartists.artist
    });
  });
}
