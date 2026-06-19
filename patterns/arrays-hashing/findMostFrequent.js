console.log(findMostFrequent([1, 2, 2, 3, 3, 3, 4]));

function findMostFrequent(arr) {
  const map = new Map();
  let maxCount = -Infinity;

  arr.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });

  [...map.values()].forEach((item) => {
    if (item > maxCount) {
      maxCount = item;
    }
  });

  return [...map.keys()].find((item) => map.get(item) === maxCount);
}

function findMostFrequen2t(arr) {
  if (arr.length === 0) {
    return null;
  }

  const counts = new Map();

  let mostFrequent = arr[0];

  let maxCount = 0;

  arr.forEach((item) => {
    const currentCount = (counts.get(item) || 0) + 1;

    counts.set(item, currentCount);

    if (currentCount > maxCount) {
      maxCount = currentCount;

      mostFrequent = item;
    }
  });

  return mostFrequent;
}
