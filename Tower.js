/*Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ",
  "*****"
]
*/

function tower(number) {
    let star = '*';
    const arr = ['*'];
        for (let i = 1; i < number; i++) {
            let row = star.repeat(i + 2);
            arr.push(row);
        }
    return arr;
}

console.log(tower(8));


