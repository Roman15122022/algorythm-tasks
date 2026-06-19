const transactions = [
  { userId: 1, amount: 100, type: 'win' },
  { userId: 1, amount: 50, type: 'bet' },
  { userId: 2, amount: 70, type: 'win' },
];

function math(data) {
  let totalWin = 0;
  let totalBet = 0;

  const result = data.reduce((acc, item) => {
    if (!acc[item.userId]) {
      acc[item.userId] = [];
    }

    acc[item.userId].push(item);

    if (item.type === 'win') {
      totalWin += item.amount;
    }

    if (item.type === 'bet') {
      totalBet += item.amount;
    }

    return acc;
  }, {});

  return {
    totalWin,
    totalBet,
    result,
  };
}

console.log(math(transactions));
