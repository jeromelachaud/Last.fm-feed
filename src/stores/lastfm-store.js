import dispatcher from '../dispatcher/dispatcher';
import Store from './store';

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
  const currentState = store.getState();
  const newState = handlers[action.type](currentState, action);  
  store.setState(newState);
  store.emitChange();
});

/*
setTimeout(function() {
  store.undo();
}, 2000);
*/
