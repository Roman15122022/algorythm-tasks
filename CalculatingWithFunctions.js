function zero(...rest) {
  if (rest.length === 0) return 0

  const [callback] = rest

  return Math.floor(eval(0 + callback))
}
function one(...rest) {
  if (rest.length === 0) return 1

  const [callback] = rest

  return Math.floor(eval(1 + callback))
}
function two(...rest) {
  if (rest.length === 0) return 2

  const [callback] = rest

  return Math.floor(eval(2 + callback))
}
function three(...rest) {
  if (rest.length === 0) return 3

  const [callback] = rest

  return Math.floor(eval(3 + callback))
}
function four(...rest) {
  if (rest.length === 0) return 4

  const [callback] = rest

  return Math.floor(eval(4 + callback))
}
function five(...rest) {
  if (rest.length === 0) return 5

  const [callback] = rest

  return Math.floor(eval(5 + callback))
}
function six(...rest) {
  if (rest.length === 0) return 6

  const [callback] = rest

  return Math.floor(eval(6 + callback))
}
function seven(...rest) {
  if (rest.length === 0) return 7

  const [callback] = rest

  return Math.floor(eval(7 + callback))
}
function eight(...rest) {
  if (rest.length === 0) return 8

  const [callback] = rest

  return Math.floor(eval(8 + callback))
}
function nine(...rest) {
  if (rest.length === 0) return 9

  const [callback] = rest

  return Math.floor(eval(9 + callback))
}

function plus(num) {
  return `+ ${num}`
}
function minus(num) {
  return `- ${num}`
}
function times(num) {
  return `* ${num}`
}
function dividedBy(num) {
  return `/ ${num}`
}

