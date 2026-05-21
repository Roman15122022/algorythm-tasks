const map = {
  ')': '(',
  ']': '[',
  '}': '{',
};

function isValidBrackets(text) {
  if (text.trim() === '') return true;

  const result = [];

  for (let i = 0; i < text.length; i++) {
    if (map[text[i]]) {
      const isClosedRight = result.pop() === map[text[i]];
      if (!isClosedRight) return false;
      continue;
    }

    result.push(text[i]);
  }

  return result.length === 0;
}

console.log(isValidBrackets('()'));
console.log(isValidBrackets('()[]{}'));
console.log(isValidBrackets('(]'));
console.log(isValidBrackets('([)]'));
console.log(isValidBrackets('{[]}'));
console.log(isValidBrackets('((()))'));
console.log(isValidBrackets('({[]})'));
console.log(isValidBrackets('((())'));
console.log(isValidBrackets(''));
