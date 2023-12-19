
// 2.plus(3).minus.(1) = 4;

Number.prototype.plus = function (num) {
    return this + num;
}
Number.prototype.minus = function (num) {
    return this - num;
}

console.log((2).plus(3).minus(10));


console.log(undefined == 0)
