const students = [
    {name: 'Alex', age: 20, unnecessaryInformation: 'male'},
    {name: 'Roma', age: 20, unnecessaryInformation: 'male'},
    {name: 'Anna', age: 22, unnecessaryInformation: 'female'},
    {name: 'Mike', age: 24, unnecessaryInformation: 'male'},
];

const filterObj = (arr) => {
    return arr.reduce((memo, item) => {
        const {name, age} = item;
        const obj = {};
        obj[name] = age;
        memo.push(obj)
        return memo;
    },[])
}

const filterObj2 = (arr) => {
    return arr.reduce((memo, item) => {
        const {name, age} = item;
        memo.push({name,age})
        return memo;
    },[])
}

console.log(filterObj(students))
console.log(filterObj2(students))
