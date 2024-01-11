// (3, 'a') => ['a', 'a', 'a']

const fill = (num, value) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
            arr.push(value);
    }
    return arr;
}

const fill2 = (value, count) => {
    let arr = [];
    arr.length = count;
    return arr.fill(value);
}

console.log(fill(5, 'b'));
console.log(fill2('b', 5))
