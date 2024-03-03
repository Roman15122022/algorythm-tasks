// [2,3,5], 12 -> 3 (5,5,2)
// [4,2,3], 8 -> 2 (4,4)
// [2,4,5], 13 -> -1

const minNumberOfCoins = (arr, num) => { //O(n^2)
    let count = 1;
    let coins = num;
    if (arr.includes(num)) return count;
    while (true) {
        let min = Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (min > coins - arr[i] && coins - arr[i] >= 0){
                min = coins - arr[i];
            }
        }
        coins = min;
        if (coins === Infinity) return -1;
        if (coins === 0) return count;
        count++
    }
}


console.log(minNumberOfCoins([1,5,10,15],68))
