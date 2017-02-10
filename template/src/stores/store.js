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

// it('should add the user to the state', function() {
//   var newState = handleUserRetrieved({}, { user: whatever });
//
//   expect(newState.user)
//     .toBe(whatever)
// })

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
      state.recentTracks = action.recentTracks;
      store.emitChange();
      break;

    case 'topArtistsRetreived':
      state.topArtists = action.topArtists;
      store.emitChange();
      break;

    default:
  }
});
