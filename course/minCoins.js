function minCoins(coins, amount) {
  const result = [];

  const sortedCoins = coins.toSorted((a, b) => b - a);

  for (let index = 0; index < sortedCoins.length; index++) {
    const coin = sortedCoins[index];

    while (amount >= coin) {
      amount -= coin;
      result.push(coin);
    }
  }

  return result;
}

console.log(minCoins([1, 5, 10, 25], 63));
console.log(minCoins([1, 2, 5, 10], 28));
console.log(minCoins([1, 10, 25], 40));
