/*Count the number of pairs of gloves in the array (pairs are counted only of the same color)*/

function  countPair(gloves){
    const counter = {}
    let memo = 0;
    for (let key in gloves){
        counter[gloves[key]] = (counter[gloves[key]] || 0) + 1;
    }
    const notRepeatArr = [...new Set(gloves)];

    for (let key in notRepeatArr){
        memo += Math.floor(counter[notRepeatArr[key]]/2);
    }
    return memo;
}

console.log(countPair(['red','red','blue','blue', 'red', 'red']));
