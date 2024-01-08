// indShort("bitcoin take over the world maybe who knows perhaps"), 3);

const shortStr = (str) => {
   return  (str.split(' ').sort((a, b) => a.length - b.length)[0].length)
}

console.log(shortStr('bitcoin take over the world maybe who knows perhaps'))
