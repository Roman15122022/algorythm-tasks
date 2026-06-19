const users = [
  { id: 1, role: 'admin', name: 'Roman' },
  { id: 2, role: 'user', name: 'Anna' },
  { id: 3, role: 'admin', name: 'Alex' },
  { id: 4, role: 'manager', name: 'Kate' },
  { id: 5, role: 'user', name: 'Max' },
];

function groupBy(obj, field) {
  return obj.reduce((acc, item) => {
    acc[item[field]] = [...(acc[item[field]] || []), item];

    return acc;
  }, {});
}

console.log(groupBy(users, 'role'));
