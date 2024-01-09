// [1,0,2,30,45,0,456,0] -> [1,2,30,45,456,0,0,0]

const zeroToEndArr = (arr) => {
    let counter = 0;
    const array = [];
    arr.forEach((item) => {
        if (item === 0) counter++;
        else array.push(item);
    })
    for (let i = 0; i < counter; i++) {
        array.push(0)
    }
    return array;
}

console.log(zeroToEndArr([1,0,2,0,3,0,4,0]))
