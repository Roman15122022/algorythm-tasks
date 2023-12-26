/*Find all pairs in an array of integers whose sum is equal to the given number

You need to return: an array of matching pairs or an empty array.*/

const arr = [1, 5, -2, 3, 8, 10, 7, 15];

const pairSum = (arr, value) => {
    let answer = [];
    let pair = [];
    let counter = 0;
    while (counter < arr.length){
        for (let i = counter; i < arr.length; i++) {
            if (arr[i] + arr[counter] === value){
                pair.push(arr[i]);
                pair.push(arr[counter]);
                answer.push(pair);
                pair = [];
            }
        }
        counter++
    }
    return answer;
}

console.log(pairSum(arr,8));
