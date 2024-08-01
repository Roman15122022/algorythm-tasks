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
