// ['meat','fish', 'pepperoni', 'cheese']
const friends = [
    {name: 'Roma', pizzas: ['cheese', 'pepperoni']},
    {name: 'Liza', pizzas: ['cheese', 'meat']},
    {name: 'Maksim', pizzas: ['meat']},
    {name: 'Yarik', pizzas: ['fish']},
]

const favoritePizza = (arr) => { // O(n*m)
    return arr.reduce((memo, item) => {
        const pizzas = item.pizzas;
        memo = [memo, ...pizzas];
        return [... new Set(memo.flat(Infinity))];
    }, [])
}

const favoritePizza2 = (arr) => { //O(n*m)
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        const pizzas = arr[i].pizzas;
        for (let j = 0; j < pizzas.length; j++) {
            answer.push(pizzas[j]);
        }
    }
    return [... new Set(answer)];
}

const favoritePizza3 = (arr) => {
    const pizzas = arr.reduce((memo, item) => {
        return [...memo, ...item.pizzas];
    },[])
    return [...new Set(pizzas)]
};



console.log(favoritePizza(friends));
console.log(favoritePizza2(friends));
console.log(favoritePizza3(friends));


