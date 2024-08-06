const obj1 = { age: 12}
const obj2 = new Object()

const nullObj = Object.create(null)
const obj3 = Object.create(obj1)

console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__ === obj3.__proto__)
console.log(obj1.__proto__)
console.log(obj3.__proto__)
console.log(nullObj.__proto__)

console.log(obj1.__proto__ === Object.prototype)
console.log(Object.prototype)


Array.prototype.log = function () {
    console.log(this)
}

String.prototype.reverseRomaVersion = function () {
    return  this.split('').reverse()
}

Boolean.prototype.reverse = function () {
    return !this
}

const arr = [1,23,3]
const str = 'Roman'
const bool = true

arr.log()
console.log(str.reverseRomaVersion())
console.log(bool.reverse())


console.log(Function.prototype)

const a = {x : 1}
console.log(a.__proto__.hasOwnProperty('__proto__'))
