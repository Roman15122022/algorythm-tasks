const students = [
    {name: 'Alex', age: 20},
    {name: 'Roma', age: 20},
    {name: 'Anna', age: 22},
    {name: 'Rix', age: 29},
    {name: 'Mike', age: 24},
    {name: 'Abdul', age: 24},
];

const sortByName = (arr) => {
    return arr.reduce((memo,item) => {
        memo[item.name[0]] = [...(memo[item.name[0]] || []), item];
        return memo;
    }, {})
}

console.log(sortByName(students))
