function runLengthEncoding(str) {
  const result = [];
  let chunk = [];

  for (let i = 0; i < str.length; i++) {
    if (chunk.length === 0) {
      chunk[0] = 1;
      chunk[1] = str[i];
      continue;
    }

    if (str[i] === chunk[1]) {
      chunk[0] += 1;
      continue;
    }

    if (str[i] !== chunk[1]) {
      result.push(chunk);
      chunk = [1, str[i]];
    }
  }

  result.push(chunk);

  return result;
}

console.log(runLengthEncoding('hello world')); //[[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
console.log(runLengthEncoding('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb'));

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

  off(event, callback) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter((item) => item !== callback);
  }

  once(event, callback) {
    const onceCallback = (data) => {
      callback(data);

      this.off(event, onceCallback);
    };

    this.on(event, onceCallback);
  }

  emit(event, data) {
    if (!this.events[event]) return;

    this.events[event].forEach((callback) => callback(data));
  }
}
