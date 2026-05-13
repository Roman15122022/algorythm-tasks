// function startCounter(start, end, delay) {
//     let count = start
//     let id = setInterval(() => {
//         if (count === end){
//             console.log(count)
//             clearInterval(id)
//             console.log('Done')
//             return
//         }
//
//         console.log(count)
//         count++
//     }, delay)
// }
//
//
// startCounter(1, 6, 1000)
//

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
  emit(event, data) {
    if (!this.events[event]) return;

    this.events[event].forEach((callback) => callback(data));
  }
}

function myFlat(arr) {
  if (arr.length === 0) return arr;

  const result = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...myFlat(item));
    } else {
      result.push(item);
    }
  });

  return result;
}

function flat(array, depth = 1) {
  const result = [];

  array.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flat(item, depth - 1));
    } else {
      result.push(item);
    }
  });

  return result;
}

Array.prototype.myFlat = function (depth = 1) {
  const flatten = (array, currentDepth) => {
    const result = [];

    array.forEach((item) => {
      if (Array.isArray(item) && currentDepth > 0) {
        result.push(
          ...flatten(
            item,

            currentDepth - 1
          )
        );
      } else {
        result.push(item);
      }
    });

    return result;
  };

  return flatten(this, depth);
};

console.log(myFlat([1, [2, [3, 4]], 5]));
console.log([1, [2, [3, 4]], 5].myFlat(Infinity));
