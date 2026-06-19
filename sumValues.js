const values = {
  a: {
    a: 1,
    b: {
      a: 2,
      b: {
        a: 3,
      },
      c: null,
    },
  },
  b: {
    a: {
      a: {
        a: '5',
        b: 3,
      },
      b: 2,
    },
  },
  c: 'test',
};

const values2 = {
  c: 'test',
};

const sumValues = (value) => {
  let sum = 0;

  if ((!Number(value) && typeof value === 'string') || value === null) return sum;

  for (const nod of Object.keys(value)) {
    const currentItem = value[nod];

    if (Number(currentItem)) {
      sum += Number(currentItem);
    } else {
      sum += sumValues(currentItem);
    }
  }

  return sum;
};

console.log(sumValues(values));
