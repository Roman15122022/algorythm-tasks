function removeDupes(str) {  // O(n^2) - квадратичная сложность
    let arr = str.split('');
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr.join('');
}


function removeDupes2(str){ //O(n)
    return [...new Set(str)].join('');
}

console.log(removeDupes('dfggfhdsfshfbhkbkdgd'))// 'abc'
console.log(removeDupes2('dfggfhdsfshfbhkbkdgd'))// 'abc'

