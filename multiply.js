/*console.log(mul(3)(4)()); // 12
console.log(mul(5)(5)());    // 25
console.log(mul(2)(1)());       // 2
 */

function multiply(firstNumber) {

  return function (nextNum) {
    if (nextNum === undefined) {
      return firstNumber;
    }

    return multiply(nextNum * firstNumber);
  }
}




console.log(multiply(3)(4)(3)());
console.log(multiply(5)(5)());
console.log(multiply(2)(1)());
