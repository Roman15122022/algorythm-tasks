

function piramid (num, symbol){
  let answer  = ''

  for (let i = 0; i <= num; i++) {
    answer += symbol.repeat(i) + '\n'
  }

  return answer
}



console.log(piramid(5, '$'));


function curriedSum(number){
  return function (num){
    if(num === undefined){
      return number;
    }

    return curriedSum(number + num);
  }
}


console.log(curriedSum( 2)(3)(4)());


function capitalizeFirstAndLastLetter(string){
  return string.split(' ').map(word => {
    const start = word.charAt(0).toUpperCase()
    const last = word.charAt(word.length - 1).toUpperCase()

    if (word.length === 1) return start;

    return start + word.slice(1,-1) + last;
  }).join(' ');
}

console.log(capitalizeFirstAndLastLetter("Hello world npm gm j"));
