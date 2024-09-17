let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(first, second) {

    return function (item) {
        return (item >= first && item <= second)
    }
}

function inArray(arr) {
    return function (item) {
        return arr.includes(item)
    }
}

/*console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2*/


let users = [
    { name: "Иван", age: 20, surname: "Иванов" },
    { name: "Пётр", age: 18, surname: "Петров" },
    { name: "Анна", age: 19, surname: "Каренина" }
];

function byField(fieldObj) {
    return function (a, b){
        return a[fieldObj] > b[fieldObj] ? 1 : -1
    }
}

console.log(users.sort(byField('name')))
console.log(users.sort(byField('age')))
