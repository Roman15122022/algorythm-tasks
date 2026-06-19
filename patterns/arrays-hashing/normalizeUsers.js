const users = [
  { id: 1, name: 'Alex', role: 'admin' },
  { id: 2, name: 'Kate', role: 'user' },
  { id: 3, name: 'John', role: 'user' },
];

function normalizeUsers(users) {
  return users.reduce((acc, item) => {
    if (!acc.ids) {
      acc.ids = [];
    }

    if (!acc.entities) {
      acc.entities = {};
    }

    if (!acc.ids.includes(item.id)) {
      acc.ids.push(item.id);
    }

    acc.entities[item.id] = item;

    return acc;
  }, {});
}

console.log(normalizeUsers(users));
