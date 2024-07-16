//    {name: 'Alex', age: 20, gender: 'male'},
//    {name: 'Roma', age: 20, gender: 'male'},
//    {name: 'Anna', age: 22, gender: 'female'},
//    {name: 'Mike', age: 24, gender: 'male'},

//'male': [
//       {name: 'Alex', age: 20, gender: 'male'},
//       {name: 'Roma', age: 20, gender: 'male'},
//       {name: 'Mike', age: 24, gender: 'male'},
//    ],
//    'female': [
//       {name: 'Anna', age: 22, gender: 'female'},
//    ]

const students = [
    {name: 'Alex', age: 20, gender: 'male'},
    {name: 'Roma', age: 20, gender: 'male'},
    {name: 'Anna', age: 22, gender: 'female'},
    {name: 'Mike', age: 24, gender: 'male'},
];

const groupByGender = (arr) => {
    return arr.reduce((memo, item) => {
        memo[item.gender] = [...(memo[item.gender] || []), item];
        return memo;
    }, {})
}

const groupByGender2 = (arr) => {
    return arr.reduce((acc, item) => {
        if (!acc[item.gender]) {
            acc[item.gender] = [];
        }
        acc[item.gender].push(item);
        return acc;
    }, {});
}

console.log(groupByGender(students))
console.log(groupByGender2(students))

console.log('a'.toUpperCase())
