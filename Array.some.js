// [1,2,3,4,5].some((element) => element > 10) --> false
// [10,12,3,6,5].some((element) => element > 10) --> true

const arr = [1,2,3,4,5]
const arr2 = [10,12,3,6,5]


Array.prototype.RomanSome = function (callback) {
    for (let i = 0; i < this.length - 1; i++) {
        if (callback(this[i])) return true
    }
    return false
}


console.log(arr.RomanSome(element => element > 10))
console.log(arr2.RomanSome(element => element > 10))
console.log('-------------')
console.log(arr.some(element => element > 10))
console.log(arr2.some(element => element > 10))
