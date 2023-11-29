function calculate(...args) {
    return (...args2) =>{
      const arr = [...args2, ...args];
      return arr.reduce((memo, item) =>{
          return memo += item;
      })
    }
}

console.log(calculate(2, 2)(1, 2, 4));
