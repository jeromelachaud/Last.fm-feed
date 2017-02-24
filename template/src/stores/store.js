import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

const CHANGE_EVENT = 'change';
const state = {
  user:{},
  recentTracks: {},
  topArtists: {}
};

class Store extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getState() {
    return state;
  }
}

const store = new Store({
  user:{},
  recentTracks: {},
  topArtists: {}
});

export default store;

export function handleUserRetrieved(state, action) {
  if (!action.user) {
    throw new Error('No user');
  }

  state.user = action.user;
  store.emitChange();
  return state;
}

export function recentTracksRetreived(state, action) {
  if (!action.recentTracks) {
    throw new Error('No recent tracks');
  }

  state.recentTracks = action.recentTracks;
  store.emitChange();
  return state;
}


export function topArtistsRetreived(state, action) {
  if (!action.topArtists) {
    throw new Error('No top artists');
  }

  state.topArtists = action.topArtists;
  store.emitChange();
  return state;
}

// var handlers = {
//   userRetrieved: function(state, action) {
//     if (!action.user) {
//       throw new Error('No user');
//     }
//
//     state.user = action.user;
//     store.emitChange();
//     return state;
//   },
//
//   recentTracksRetreived: function(state, action) {
//
//   }
// }

dispatcher.register((action) => {

  // handles[action.type](state, action);

  switch (action.type) {
    case 'userRetrieved':
      handleUserRetrieved(state, action);
      break;

    case 'recentTracksRetreived':
      recentTracksRetreived(state, action);
      break;

    case 'topArtistsRetreived':
      topArtistsRetreived(state, action);
      break;

    default:
  }
});
