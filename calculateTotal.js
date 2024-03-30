const orders = [
    { id: 1, product: 'T-shirt', price: 25, quantity: 2 },
    { id: 2, product: 'Jeans', price: 50, quantity: 1 },
    { id: 3, product: 'Shoes', price: 80, quantity: 1 },
    { id: 4, product: 'T-shirt', price: 30, quantity: 1 },
    { id: 5, product: 'Jeans', price: 55, quantity: 2 },
];

const calculateTotal = (orders) => {
    return orders.reduce((memo, item) => {
        const product = item.product;
        const price = item.price;
        const quantity = item.quantity;
        memo[product] = (memo[product] || 0) + price * quantity;
        return memo;
    }, {})
}

console.log(calculateTotal(orders))
