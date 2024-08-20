/*Count the number of pairs of gloves in the array (pairs are counted only of the same color)*/

const arrGloves = ['red', 'red', 'blue', 'blue', 'red', 'red', 'orange', 'orange', 'blue'] // red - 4, blue -3 , orange - 2


function countPair(gloves) { //O(n)
    const counter = {}
    let memo = 0;
    for (let key in gloves) {
        counter[gloves[key]] = (counter[gloves[key]] || 0) + 1;
    }
    const notRepeatArr = [...new Set(gloves)];

    for (let key in notRepeatArr) {
        memo += Math.floor(counter[notRepeatArr[key]] / 2);
    }
    return memo;
}

function sortByRepeatability(arr) {
    const hash = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1

        return acc
    }, {})

    return Object.keys(hash).sort((a, b) => {
        return  hash[b] - hash[a]
    })
}

console.log(countPair(arrGloves));

console.log(sortByRepeatability(arrGloves))
