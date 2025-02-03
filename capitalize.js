function capitalize(str) {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > 0) {
      if (word.length === 1) {
        word = word.toUpperCase();
      } else {
        const firstChar = word.charAt(0).toUpperCase();
        const lastChar = word.charAt(word.length - 1).toUpperCase();
        const middle = word.slice(1, -1);
        word = firstChar + middle + lastChar;
      }
    }

    words[i] = word;
  }

  return words.join(' ');
}

console.log(capitalize('Hello world npm np a '));
