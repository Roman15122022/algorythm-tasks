const arrKeys = ['car', 'male']
const obj = {
    age: 18,
    name: 'Roma',
    male: true,
    car: "Mustang"
}

function deleteOptions (obj, arr) {
    const answerOnj = {}

    for (let key in obj){
        if (!arr.includes(key)){
            answerOnj[key] = obj[key]
        }
    }

    return answerOnj
}

function deleteOptions2(obj, arr) {
    return Object.keys(obj).reduce((acc, key) => {
        if (!arr.includes(key)) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}

console.log(deleteOptions(obj, arrKeys))
console.log(deleteOptions2(obj, arrKeys))
