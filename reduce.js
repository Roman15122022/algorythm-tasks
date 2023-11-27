const reduce = function reduce(arr, reduceCallback, initialValue) {
    let value = initialValue;
    for (let i = 0; i < arr.length; i++) {
        value = reduceCallback(value, arr[i], i, arr);
    }

    return value;
}

console.log(reduce([1,2,3], (memo, item)=> memo += item, 0))
