/*
{
'20': [{name: 'Alex', age: 20},{name: "Roma", age: 20}],
'24': [{name: 'Garik', age: 24},{name: 'Mike', age: 24}]
}
*/

const students = [
    {name: 'Alex', age: 20},
    {name: "Roma", age: 20},
    {name: 'Garik', age: 24},
    {name: 'Mike', age: 24},
]

const groupByAge = (arr) => {
    return arr.reduce((memo, item) => {
        const age = item.age;
        if (!memo[age]) memo[age] = [];
        memo[age].push(item);
        return memo;
    }, {})
}

const countStudentByAge = (arr) => {
    return arr.reduce((memo, item) => {
        const age = item.age;
        /*memo[age] = (memo[age] || 0) + 1;*/
        if (!memo[age]) {
            memo[age] = 1;
        } else memo[age]++;
        return memo;
    }, {})
}

console.log(groupByAge(students));
console.log(countStudentByAge(students))
