function sum(){
    console.log(arguments);
    let arr = Object.values(arguments);
    let arr2 = Array.prototype.slice.call(arguments);
    console.log(arr);
    console.log(arr2)
    return arr.reduce((memo,item) => memo += item);
}

console.log(sum('b','a', 'nan', 'a'))


const obj = {
  count: 1,
  date: 2
}


const obj2 = {
  count: 33,
  date: 11
}
