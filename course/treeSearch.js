const tree = [
  {
    value: 5,
    children: [
      {
        value: 4,
        children: [
          { value: 7, children: [] },
          {
            value: 11,
            children: [{ value: 5, children: [] }],
          },
        ],
      },
      {
        value: 3,
        children: [{ value: 4, children: [] }],
      },
      {
        value: 7,
        children: [
          { value: 1, children: [] },
          { value: 12, children: [] },
        ],
      },
    ],
  },
];

function recirsion(tree) {
  let sum = 0;

  if (!tree.length) return sum;

  for (const node of tree) {
    sum += node.value;
    sum += recirsion(node.children);
  }

  return sum;
}

console.log(recirsion(tree));

function tryOne(tree) {
  let sum = 0;

  if (!tree.length) return sum;

  for (const nod of tree) {
    sum += nod.value;
    sum += tryOne(nod.children);
  }

  return sum;
}
