import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';
// const states = [];

// states.push(state);
class Store extends EventEmitter {
  constructor(defaultState) {
    super();
    this.state = defaultState;
  }

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
    return this.state;
  }

  setState(state) {
    this.state = state;
  }
}

export default Store;