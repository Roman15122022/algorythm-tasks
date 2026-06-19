function replaceSubstring(str, search, replace) {
  return str
    .split(' ')
    .map((item) => (item === search ? replace : item))
    .join(' ');
}

console.log(replaceSubstring('hello world', 'world', 'there'));
console.log(replaceSubstring('abc abc abc', '123', '123 123 123'));

Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const currentItem = this[i];

    if (callback(currentItem, i, this)) {
      result.push(currentItem);
    }
  }

  return result;
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.myFilter((item) => item > 2));
