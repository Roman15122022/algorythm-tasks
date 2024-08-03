/*Write a function that takes an array of `[key, value]` pairs and returns an object composed of those pairs.*/

const pairs = [
    ['name', 'Alice'],
    ['age', 30],
    ['city', 'New York'],
    ['isStudent', false]
]

function reverseObjectEntries (arr) {
    return arr.reduce((acc, [key, value]) => {
        acc[key] = value
        return acc
    }, {})
}

console.log(reverseObjectEntries(pairs))
