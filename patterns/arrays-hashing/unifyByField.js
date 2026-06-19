const users = [
  { id: 1, name: 'Roman' },

  { id: 2, name: 'Anna' },

  { id: 1, name: 'Roman Updated' },

  { id: 3, name: 'Alex' },

  { id: 2, name: 'Anna Updated' },
];

console.log(uniqueBy(users, 'id'));

function uniqueBy(obj, field) {
  const arr = [];
  return obj.filter((item) => {
    if (!arr.includes(item[field])) {
      arr.push(item[field]);
      return true;
    }

    return false;
  });
}
