// // // // function startCounter(start, end, delay) {
// // // //     let count = start
// // // //     let id = setInterval(() => {
// // // //         if (count === end){
// // // //             console.log(count)
// // // //             clearInterval(id)
// // // //             console.log('Done')
// // // //             return
// // // //         }
// // // //
// // // //         console.log(count)
// // // //         count++
// // // //     }, delay)
// // // // }
// // // //
// // // //
// // // // startCounter(1, 6, 1000)
// // // //
// // //
// // // class EventEmitter {
// // //   constructor() {
// // //     this.events = {};
// // //   }
// // //
// // //   on(event, callback) {
// // //     if (!this.events[event]) {
// // //       this.events[event] = [];
// // //     }
// // //
// // //     this.events[event].push(callback);
// // //   }
// // //
// // //   off(event, callback) {
// // //     if (!this.events[event]) return;
// // //
// // //     this.events[event] = this.events[event].filter((item) => item !== callback);
// // //   }
// // //   emit(event, data) {
// // //     if (!this.events[event]) return;
// // //
// // //     this.events[event].forEach((callback) => callback(data));
// // //   }
// // // }
// // //
// // // function myFlat(arr) {
// // //   if (arr.length === 0) return arr;
// // //
// // //   const result = [];
// // //
// // //   arr.forEach((item) => {
// // //     if (Array.isArray(item)) {
// // //       result.push(...myFlat(item));
// // //     } else {
// // //       result.push(item);
// // //     }
// // //   });
// // //
// // //   return result;
// // // }
// // //
// // // function flat(array, depth = 1) {
// // //   const result = [];
// // //
// // //   array.forEach((item) => {
// // //     if (Array.isArray(item) && depth > 0) {
// // //       result.push(...flat(item, depth - 1));
// // //     } else {
// // //       result.push(item);
// // //     }
// // //   });
// // //
// // //   return result;
// // // }
// // //
// // // Array.prototype.myFlat = function (depth = 1) {
// // //   const flatten = (array, currentDepth) => {
// // //     const result = [];
// // //
// // //     array.forEach((item) => {
// // //       if (Array.isArray(item) && currentDepth > 0) {
// // //         result.push(
// // //           ...flatten(
// // //             item,
// // //
// // //             currentDepth - 1
// // //           )
// // //         );
// // //       } else {
// // //         result.push(item);
// // //       }
// // //     });
// // //
// // //     return result;
// // //   };
// // //
// // //   return flatten(this, depth);
// // // };
// // //
// // // console.log(myFlat([1, [2, [3, 4]], 5]));
// // // console.log([1, [2, [3, 4]], 5].myFlat(Infinity));
// //
// // Array.prototype.myMap = function (callback) {
// //   const result = [];
// //
// //   for (let i = 0; i < this.length; i++) {
// //     const item = this[i];
// //
// //     result.push(callback(item));
// //   }
// //
// //   return result;
// // };
// //
// // function mePromiseAll(promises) {
// //   return new Promise((resolve, reject) => {
// //     let count = 0;
// //     const result = [];
// //
// //     for (let i = 0; i < promises.length; i++) {
// //       const item = promises[i];
// //
// //       Promise.resolve(item)
// //         .then((response) => {
// //           result[i] = response;
// //           count++;
// //           if (count === promises.length) resolve(result);
// //         })
// //         .catch((e) => {
// //           reject(e);
// //         });
// //     }
// //   });
// // }
// //
// // function throttle(callback, delay) {
// //   let lastTimeCalled = 0;
// //
// //   return function (...args) {
// //     const now = Date.now();
// //
// //     if (now - lastTimeCalled > delay) {
// //       callback.apply(this, args);
// //       lastTimeCalled = now;
// //     }
// //   };
// // }
//
// function deepEqual(a, b) {
//   if (a === b) {
//     return true;
//   }
//
//   if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
//     return false;
//   }
//
//   if (Array.isArray(a) !== Array.isArray(b)) {
//     return false;
//   }
//
//   if (Array.isArray(a) && Array.isArray(b)) {
//     if (a.length !== b.length) {
//       return false;
//     }
//
//     for (let i = 0; i < a.length; i++) {
//       if (!deepEqual(a[i], b[i])) {
//         return false;
//       }
//     }
//
//     return true;
//   }
//
//   const keysA = Object.keys(a);
//
//   const keysB = Object.keys(b);
//
//   if (keysA.length !== keysB.length) {
//     return false;
//   }
//
//   for (const key of keysA) {
//     if (!keysB.includes(key)) {
//       return false;
//     }
//
//     if (!deepEqual(a[key], b[key])) {
//       return false;
//     }
//   }
//
//   return true;
// }

class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const value = this.cache.get(key);

    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.limit) {
      const oldestKey = this.cache.keys().next().value;

      this.cache.delete(oldestKey);
    }
  }
}
