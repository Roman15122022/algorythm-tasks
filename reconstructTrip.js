const trips = [
  { from: 'Paris', to: 'Berlin' },
  { from: 'Kyiv', to: 'Paris' },
  { from: 'Berlin', to: 'Prague' },
];

function reconstructTrip(trips) {
  const allPlaces = trips.flatMap((item) => [item.from, item.to]);

  const unique = new Set(allPlaces);

  const start = [...unique].find((item) => !trips.map((item) => item.to).includes(item));

  const end = [...unique].find((item) => !trips.map((item) => item.from).includes(item));

  const result = [];
  let currentPosition = start;

  while (currentPosition !== end) {
    const item = trips.find((i) => i.from === currentPosition);
    if (currentPosition === start) result.push(item.from);
    result.push(item.to);
    currentPosition = item.to;
  }

  return result;
}

console.log(reconstructTrip(trips));
