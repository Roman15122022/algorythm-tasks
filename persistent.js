//39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

let counter = 0;
const persistent = (num) => {

    let arr = num.toString().split('');
    if (arr.length === 1){
        return counter;
    }
    counter++;
    let multiply = arr.reduce((memo, item) => {
       return  memo *= Number(item);
    },1)
    return persistent(multiply);
}

console.log(persistent(39))
