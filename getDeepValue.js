function getDeepValue(object, path) {
  const arr = path.split('.');

  return arr.reduce((acc, item) => {
    acc = acc?.[item];

    return acc;
  }, object);
}

const data = {
  time: 1741265520228,
  user: {
    id: 1,
    balance: null,
    profile: {
      age: 25,
    },
  },
};

// console.log(getDeepValue(data, 'time'));
console.log(getDeepValue(data, 'user.id'));
console.log(getDeepValue(data, 'user.balance'));
console.log(getDeepValue(data, 'user.balance.cashback'));
console.log(getDeepValue(data, 'user.profile.age'));
console.log(getDeepValue(data, 'user.profile') === data.user.profile);
