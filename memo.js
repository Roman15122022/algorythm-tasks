// memoization

function heavyFunction(argument) {
    const endTime = Date.now() + 2000;

    while (Date.now() < endTime) {

    }

    return `Complete with: ${argument}`;
}

function memoize(fn){
    const cache = {};
    return function(param){
        if(cache[param]){
            return cache[param];
        } else{
            let result = fn(param)
            cache[param] = result;
            return result;
        }
    }
}
const memoFn = memoize(heavyFunction);

console.log(memoFn(5))
console.log(memoFn(6))
console.log(memoFn(5))
