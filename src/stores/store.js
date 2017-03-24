import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';
// const states = [];

// states.push(state);
class Store extends EventEmitter {
  constructor(defaultState) {
    super();
    this.state = defaultState;
    this.states = [defaultState];
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
    this.states.push(state);
    this.emitChange();
  }

  undo() {
    this.states.pop();
    this.state = this.states[this.states.length - 1];
    this.emitChange();
  }
}

export default Store;
