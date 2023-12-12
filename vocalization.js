// «a», «e», «i», «o», «u»;


const countingVoc = (str) => {
    const arr = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        arr.forEach(item => {
            if (item === str.toLowerCase()[i]) counter++;
        })
    }
    return counter;
}


console.log(countingVoc('hellO'));
console.log(countingVoc('why'));
