const exampleObject = {
    name: 'Alice',
    age: 30,
    city: 'New York',
    isStudent: false
};

function reverseValueKey (obj){
    return Object.entries(obj).reduce((acc , [key, value]) => {
        acc[value] = key
        return acc
    }, {})
}

function countOptions (obj) {
    return Object.keys(obj).length
}

console.log(reverseValueKey(exampleObject))
console.log(countOptions(exampleObject))

console.log((' ' || 'b') || false)
