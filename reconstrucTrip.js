function reconstructTrip(tickets) {
  const listCities = tickets.reduce((acc, item) => {
    acc.add(item.from);
    acc.add(item.to);

    return acc;
  }, new Set());

  const firstPlace = [...listCities].find((item) => !tickets.map((city) => city.to).includes(item));
  const lastPlace = [...listCities].find(
    (item) => !tickets.map((city) => city.from).includes(item)
  );

  const result = [];
  let position = firstPlace;

  while (position !== lastPlace) {
    const item = tickets.find((city) => city.from === position);
    result.push(item);
    position = item.to;
  }

  return result;
}

console.log(
  reconstructTrip([
    { from: 'Львів', to: 'Тернопіль' },
    { from: 'Дніпро', to: 'Харків' },
    { from: 'Одеса', to: 'Київ' },
    { from: 'Тернопіль', to: 'Дніпро' },
    { from: 'Київ', to: 'Львів' },
  ])
);

// [
//   { from: 'Одеса', to: 'Київ' },
//   { from: 'Київ', to: 'Львів' },
//   { from: 'Львів', to: 'Тернопіль' },
//   { from: 'Тернопіль', to: 'Дніпро' },
//   { from: 'Дніпро', to: 'Харків' }
// ]
