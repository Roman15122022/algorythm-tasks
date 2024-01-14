const students = [
    {name: 'Alex', grades: {Math: 90, English: 85}},
    {name: 'Roma', grades: {Math: 80, English: 92}},
    {name: 'Anna', grades: {Math: 95, English: 88}},
];

const averageScore = (arr) => {
    return arr.reduce((memo, item) => {
        for (const subject in item.grades) {
            memo[subject] = (memo[subject] || 0) + item.grades[subject] / arr.length;
        }
        return memo;
    }, {});
}

console.log(averageScore(students))
