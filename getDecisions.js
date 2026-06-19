const getDecisions1 = [
  { id: 1, result: 'approved' },
  { id: 3, result: 'waiting' },
  { id: 15, result: 'approved' },
  { id: 20, result: 'approved' },
  { id: 26, result: 'waiting' },
  { id: 30, result: 'approved' },
];

const getDecisions2 = [
  { id: 2, result: 'approved' },
  { id: 4, result: 'waiting' },
  { id: 14, result: 'approved' },
  { id: 16, result: 'approved' },
  { id: 23, result: 'waiting' },
  { id: 32, result: 'approved' },
];

const getLastDecision = (decision1, decision2, k) => {
  const result = [];

  let firstIndex = decision1.length - 1;
  let secondIndex = decision2.length - 1;

  while (result.length < k && firstIndex >= 0 && secondIndex >= 0) {
    if (decision1[firstIndex].id <= decision2[secondIndex].id) {
      result.push(decision2[secondIndex]);
      secondIndex--;
    } else {
      result.push(decision1[firstIndex]);
      firstIndex--;
    }
  }

  while (result.length < k && firstIndex >= 0) {
    result.push(decision1[firstIndex]);

    firstIndex--;
  }

  while (result.length < k && secondIndex >= 0) {
    result.push(decision2[secondIndex]);

    secondIndex--;
  }

  return result;
};

console.log(getLastDecision(getDecisions1, getDecisions2, 5));
