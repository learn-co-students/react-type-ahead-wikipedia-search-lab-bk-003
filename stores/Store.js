'use strict';

class Store {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  addListener(listener) {
    this.listeners.push(listener)
    return () => this.listeners = this.listeners.filter(l => l !== listener)
  }

  setState(state) {
    this.state = state;
    for (const listener of this.listeners) {
      listener.call(this, state);
    }
  }

  getState() {
    return this.state;
  }
}

module.exports = Store;
