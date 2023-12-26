/*({ a: 1, b: 2 }, 'b') => { a: 1 }*/

const without = (obj, key) => {
    const object = {};
    const arrKey = Object.keys(obj);
    for (let i = 0; i < arrKey.length; i++) {
        if (arrKey[i] !== key){
            object[arrKey[i]] = obj[arrKey[i]];
        }
    }
    return object;
}

console.log(without({ a: 1, b: 2, c: 3, d: 4}, 'a'));
