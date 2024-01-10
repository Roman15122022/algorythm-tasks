// [7,1,4,5,6,4] -> 5
// [7,6,5,3,2,1] -> 0

const profit = (arr) => { // O(n^2)
    let maxProfit = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] - arr[i] > maxProfit) {
                maxProfit = arr[j] - arr[i];
            }
        }
    }
    return maxProfit;
}

console.log(profit([7,1,4,45,6,4]));

// simplify

const maxProfit = (arr) => {
    let minPrice = arr[0];
    let maxProfit = 0;

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        if (current < minPrice){
            minPrice = current;
        }
        if (current - minPrice > maxProfit){
            maxProfit = current - minPrice;
        }
    }
    return maxProfit;
}

console.log(maxProfit([7,1,4,45,6,4]))
