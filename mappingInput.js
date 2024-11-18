const input = [
  {value: 'or', order: 1, expired: true},
  {value: 'asdasd', order: 3, expired: false},
  {value: 'am', order: 4, expired: true},
  {value: 'asdasd', order: 2, expired: false},
]

function getInput  (arr) {
  return arr.filter(item => item.expired).sort((a,b) => a.order - b.order).reduce((acc, item) => {
    acc += item.value.split('').reverse().join('')

    return acc
  }, '')
}

console.log(getInput(input))
