/*({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]*/


const makePairs = (obj) => {
    let arr = [];
    let chunk = [];
    const objectKeys = Object.keys(obj);
    for (let i = 0; i < objectKeys.length; i++) {
        chunk.push(objectKeys[i]);
        chunk.push(obj[objectKeys[i]]);
        arr.push(chunk);
        chunk = [];
    }
    return arr;
}

console.log(makePairs({ a: 1, b: 2 , c: 3, d: 4}))
