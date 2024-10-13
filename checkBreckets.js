// {}[]()

function checkBreckets(str) {
  const dictionary = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] in dictionary) {
      arr.push(dictionary[str[i]])
    } else if (arr.pop() !== str[i]) {
      return false
    }
  }

  return arr.length === 0;
}

console.log(checkBreckets('(({{[]}}))'))
