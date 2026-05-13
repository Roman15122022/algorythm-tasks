class EventEmiter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(callback);
  }

  off(event, callback) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter((item) => item !== callback);
  }

  emit(event, data) {
    if (!this.events[event]) return;

    this.events[event].forEach((callback) => callback(data));
  }
}

class SymbolPool {
  constructor(createSymbol, size) {
    this.pool = [];

    for (let i = 0; i < size; i++) {
      this.pool.push(createSymbol());
    }
  }

  get() {
    return this.pool.pop();
  }

  release(symbol) {
    this.pool.push(symbol);
  }
}

class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(callback) {
    this.observers.push(callback);
  }
  unsubscribe(callback) {
    this.observers = this.observers.filter((item) => item !== callback);
  }
  notify(data) {
    this.observers.forEach((callback) => callback(data));
  }
}

//////////////

class myEventEmiter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(callback);
  }
  off(event, callback) {
    if (!this.events[event]) {
      return;
    }

    this.events[event] = this.events[event].filter((item) => item !== callback);
  }
  emit(event, data) {
    if (!this.events[event]) {
      return;
    }

    this.events[event].forEach((callback) => callback(data));
  }
}

class ObjectPool {
  constructor(createObject, size) {
    this.pool = [];

    for (let i = 0; i < size; i++) {
      this.pool.push(createObject());
    }
  }

  get() {
    this.pool.pop();
  }

  realese(obj) {
    this.pool.push(obj);
  }
}
