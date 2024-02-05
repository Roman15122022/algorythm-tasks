const students = [
    { name: 'Alex', age: 21, score: 85 },
    { name: 'Kate', age: 20, score: 92 },
    { name: 'Dima', age: 22, score: 78 },
    { name: 'Maria', age: 21, score: 95 },
    { name: 'Ivan', age: 23, score: 88 },
    { name: 'Roma', age: 20, score: 90 },
];

/* age >=20 and score >85*/


const groupByAgeScore = (students) => {
    return students.reduce((memo, item) => {
        if (item.age >= 20 && item.score > 85){
            memo.push(item);
        }
        return memo
    }, [])
}

console.log(groupByAgeScore(students))
