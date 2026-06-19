const values = [1, 1, 2, 2, 2, 4, 4, 5, 6, 7, 9, 10];

const getArrayMeta = (values) => {
  const map = {};

  for (let i = 0; i < values.length; i++) {
    const currentItem = values[i];
    map[currentItem] = (map[currentItem] || 0) + 1;
  }

  const uniqueValues = Object.keys(map).filter((item) => map[item] === 1);

  const duplicateValues = Object.keys(map).reduce((acc, item) => {
    if (map[item] > 1) {
      acc[item] = map[item];
    }
    return acc;
  }, {});

  return { uniqueValues, duplicateValues };
};

console.log(getArrayMeta(values));

/*

{

  uniqueValues: [5, 6, 7, 9, 10],

  duplicateValues: {

    1: 2,

    2: 3,

    4: 2

  }

}

*/
