console.log(findFirstUnique([4, 5, 1, 2, 0, 4, 1, 2]));

function findFirstUnique(items) {
  const counts = new Map();

  items.forEach((item) => {
    counts.set(item, (counts.get(item) || 0) + 1);
  });

  return items.find((item) => counts.get(item) === 1) ?? null;
}
