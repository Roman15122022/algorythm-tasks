const sym1 = Symbol('2');

const originObj = {
    name: 'Roma',
    age: 20,
    hobby: {
        sport: {
            first: 'basketball',
            second: 'football',
        },
        love: 'programming'
    },
    date: new Date(),
    /*symbol: sym1,*/
    /*func: () => console.log(1),*/
}

function deepClone(obj) {
    if (typeof obj === 'null' || typeof obj !== 'object') {
        return obj
    }

    if (Array.isArray(obj)){
        obj.map(item => deepClone(item))
    }

    const clone = {}
    for (const key in obj){
        if (obj.hasOwnProperty(key)){
            clone[key] = deepClone(obj[key])
        }
    }
    return clone
}

/*
const simpleClone = JSON.parse(JSON.stringify(originObj))
const simpleAssign = Object.assign({}, originObj)
const structure = structuredClone(originObj)

simpleAssign.hobby.love = 'sex'
structure.hobby.love = 'money'

console.log('ORIG', originObj)
console.log("PARSE", simpleClone)
console.log("ASSIGN", simpleAssign)
console.log("STRUCTURE", structure)
*/

const deep = deepClone(originObj)
deep.name = '123'

console.log(originObj)
console.log(deep)
