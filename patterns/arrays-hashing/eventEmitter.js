class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(callback);
  }

  once(event, callback) {
    const wrapper = (data) => {
      callback(data);

      this.off(event, wrapper);
    };

    this.on(event, wrapper);
  }

  off(event, callback) {
    if (!this.events[event]) {
      return undefined;
    }

    this.events[event] = this.events[event].filter((item) => item !== callback);
  }

  emit(event, data) {
    if (!this.events[event]) {
      return undefined;
    }

    this.events[event].forEach((cb) => cb(data));
  }
}
