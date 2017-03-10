import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

const CHANGE_EVENT = 'change';
// const states = [];
let state = {
  user:{},
  recentTracks: {},
  topArtists: {}
};

// states.push(state);
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

const handlers = {
  userRetrieved: function(state, action) {
    if (!action.user) {
      throw new Error('No user');
    }

    return {
      ...state,
      user: action.user
    };
  },

  recentTracksRetreived: function(state, action) {
    if (!action.recentTracks) {
      throw new Error('No recent tracks');
    }

    return {
      ...state,
      recentTracks: action.recentTracks
    };
  },

  topArtistsRetreived: function(state, action) {
    if (!action.topArtists) {
      throw new Error('No top artists');
    }

    return {
      ...state,
      topArtists: action.topArtists
    };
  }
};

export {
  handlers
};

dispatcher.register((action) => {
  state = handlers[action.type](state, action);
  // states.push(state);
  store.emitChange();
});
