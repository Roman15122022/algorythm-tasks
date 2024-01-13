const students = [
    {name: 'Alex', age: 20},
    {name: 'Roma', age: 20},
    {name: 'Anna', age: 22},
    {name: 'Mike', age: 24},
    {name: 'Maks', age: 21},
];

const filterByAge = (arr) => {
    return arr.filter(item => item.age >= 21).reduce((memo, item) => {
        memo['over21'] = [...(memo['over21'] || []), item];
        return memo
    },{})
}

console.log(filterByAge(students));
