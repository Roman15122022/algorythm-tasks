const people = [
    {
        name: 'Alex',
        city: 'Moscow',
    },
    {
        name: 'Ivan',
        city: 'Moscow',
    },
    {
        name: 'Joe',
        city: 'New York'
    },
    {
        name: 'Johan',
        city: 'Berlin'
    },
    {
        name: 'Roma',
        city: 'Berlin'
    },
    {
        name: 'Yarik',
        city: 'Berlin'
    },
]

const groupByCity = (arr) => {
    return arr.reduce((memo, item) => {
        memo[item.city] = memo[item.city]? [...memo[item.city], item.name] : [item.name]
        return memo;
    }, {})
}

console.log(groupByCity(people))
