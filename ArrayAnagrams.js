// input ["eat", "tea", "tan", "ate", "nat", "bat"]
//out [["eat", "tea", "ate"], ["tan", "nat"], "bat"]

function findAnagrams(arr) {
  const dictionary = arr.reduce((acc, word) => {
    const sortedWord = word.split('').sort().join('')

    acc[sortedWord] = acc[sortedWord] ? [...acc[sortedWord], word] : [word]

    return acc
  }, {})

  return Object.values(dictionary)
}


console.log(findAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
