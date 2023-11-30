let a = 'sda';
let b = a.length;
let c = a.replace('s', 'b');
console.log(c)


let arr = [1,2,3,[12,23],[[213]]];

console.log(arr.flat(Infinity))
console.log(arr)


let strArr = arr.toString().split(',').map(Number)
console.log(strArr)
