const goods = [
  {id: 'ab', name: 'Name-1', type: 'Steal', weight: 1},
  {id: 'cd', name: 'Name-2', type: 'Steal', weight: 2},
  {id: 'de', name: 'Name-3', type: 'Iron', weight: 3},
  {id: 'bc', name: 'Name-4', type: 'Iron', weight: 4},
  {id: 'ef', name: 'Name-5', type: 'Steal', weight: 2},
  {id: 'fg', name: 'Name-6', type: 'Iron', weight: '4'},
]


const getRolesTable = (arr) => {
  return arr.reduce((acc, {id, type, weight}) => {
    acc[type] = acc[type] || {}
    acc[type].ids = acc[type].ids || []
    acc[type].ids.push(id)
    acc[type].totalWeight = (acc[type].totalWeight || 0) + +weight

    return acc
  }, {})
}

console.log(getRolesTable(goods))
