const arr = [1,2,3,4,5]
const arr2 = [10,12,3,6,5]


Array.prototype.RomanEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) return false;
    }
    return true;
}

console.log(arr.RomanEvery(item => item > 0))
console.log(arr.RomanEvery(item => item > 1))
