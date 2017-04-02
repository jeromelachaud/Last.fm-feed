import dispatcher from '../dispatcher/dispatcher';
import Store from './store';

export const store = new Store({
  recentTrack: {
    'artist': {
      '#text': ''
    },
    'album':{
      '#text': ''
    },
    'date':{
      '#text': ''
    },
    'image':[
      {
        '#text': ''
      },
      {
        '#text': ''
      },
      {
        '#text': ''
      },
      {
        '#text': ''
      }
    ],
    'name': '',
    'url': ''
  },
  recentTracks: [],
  topArtist: {
    'name': '',
    'playcount': null,
    'image': [
      {
        '#text': ''
      },
      {
        '#text': ''
      },
      {
        '#text': ''
      },
      {
        '#text': ''
      }
    ],
    'url': ''
  },
  topArtists: [],
  user: {
    'image': [
      {
        '#text': ''
      },
      {
        '#text': ''
      },
      {
        '#text': ''
      },
      {
        '#text': ''
      }
    ],
    'name': '',
    'playcount': '',
    'registered':{
      '#text': '',
      'unixtime': ''
    },
    'url': ''
  }
});

export const handlers = {
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
