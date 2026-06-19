console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1, 6],[8, 10],[15, 18]]

function mergeIntervals(arr) {
  const sortedArr = arr.toSorted((a, b) => a[0] - b[0]);
  const result = [];

  for (let i = 0; i < sortedArr.length; i++) {
    const item = sortedArr[i];
    const lastItemInResult = result[result.length - 1];

    if (!lastItemInResult) {
      result.push(item);
    } else if (lastItemInResult[1] >= item[0]) {
      lastItemInResult[1] = Math.max(lastItemInResult[1], item[1]);
    } else {
      result.push(item);
    }
  }

  return result;
}
