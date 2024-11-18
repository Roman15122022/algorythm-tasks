const input = [
  {value: 'ro', order: 1, expired: true},
  {value: 'asdasd', order: 4, expired: false},
  {value: 'a', order: 5, expired: true},
  {value: 'm', order: 3, expired: true},
  {value: 'asdasd', order: 2, expired: false},
]

function getInput  (arr) {
  return arr.filter(item => item.expired).sort((a,b) => a.order - b.order).reduce((acc, item) => {
    acc += item.value

    return acc
  }, '')
}

console.log(getInput(input))
