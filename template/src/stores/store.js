import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

const CHANGE_EVENT = 'change';
const state = {
  user:{},
  recentTracks: {}
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
  recentTracks: {}
});

export default store;

dispatcher.register(function(action) {
  switch (action.type) {
    case 'userRetrieved':
      state.user = action.user;
      store.emitChange();
      break;

    case 'recentTracksRetreived':
      state.recentTracks = action.recentTracks;
      store.emitChange();
      break;

    default:
  }
});
