const events = [
  { gameId: 'slot-1', type: 'bet', amount: 10 },

  { gameId: 'slot-1', type: 'win', amount: 25 },

  { gameId: 'slot-2', type: 'bet', amount: 5 },

  { gameId: 'slot-1', type: 'bet', amount: 15 },

  { gameId: 'slot-2', type: 'win', amount: 12 },
];

// [
//   {
//     gameId: "slot-1",
//     totalBet: 25,
//     totalWin: 25,
//     profit: 0
//   },
//   {
//     gameId: "slot-2",
//     totalBet: 5,
//     totalWin: 12,
//     profit: 7
//   }
// ]

// function getGameStats(events) {
//   const stats = new Map();
//
//   events.forEach((event) => {
//     if (!stats.has(event.gameId)) {
//       stats.set(event.gameId, {
//         gameId: event.gameId,
//
//         totalBet: 0,
//
//         totalWin: 0,
//
//         profit: 0,
//       });
//     }
//
//     const gameStats = stats.get(event.gameId);
//
//     if (event.type === 'bet') {
//       gameStats.totalBet += event.amount;
//     }
//
//     if (event.type === 'win') {
//       gameStats.totalWin += event.amount;
//     }
//
//     gameStats.profit = gameStats.totalWin - gameStats.totalBet;
//   });
//
//   return Array.from(stats.values());
// }

console.log(getStats(events));

function getStats(events) {
  const map = new Map();

  events.forEach((item) => {
    if (!map.has(item.gameId)) {
      map.set(item.gameId, {
        gameId: item.gameId,
        totalWin: 0,
        totalBet: 0,
        profit: 0,
      });
    }

    const gameStats = map.get(item.gameId);

    if (item.type === 'win') {
      gameStats.totalWin += item.amount;
    }

    if (item.type === 'bet') {
      gameStats.totalBet += item.amount;
    }

    gameStats.profit = gameStats.totalWin - gameStats.totalBet;
  });

  return [...map.values()];
}
