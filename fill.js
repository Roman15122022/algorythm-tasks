// (3, 'a') => ['a', 'a', 'a']

const fill = (num, value) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
            arr.push(value);
    }
    return arr;
}

console.log(fill(5, 'b'))
