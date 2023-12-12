/*You are required to write a function that outputs to the console the numbers from 1 to n, where n is an integer that the function takes as a parameter, with these conditions:

output fizz instead of numbers divisible by 3;
output buzz instead of numbers divisible by 5;
output fizzbuzz instead of numbers divisible by both 3 and 5.*/

const fizzBuzz = (num) =>{
    for (let i = 0; i <= num ; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0){
            console.log('Fizz');
        }
        else if (i % 5 === 0){
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}

fizzBuzz(15);
