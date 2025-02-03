


function curriedSum(...arg){

  return function sum(...argSum){
    if (argSum.length === 0){
      return arg.reduce((acc, item) => {
        return acc + item;
      });
    }
   return curriedSum(...argSum, ...arg)
  }
}




console.log(curriedSum(1)(2)(3)(4)()); // 10
console.log(curriedSum(1, 2)(3, 4)()); // 10
console.log(curriedSum(1, 2, 3)(4)()); // 10
console.log(curriedSum(1)(2, 3, 4)()); // 10
