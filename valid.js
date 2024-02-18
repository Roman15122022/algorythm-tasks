const valid = (variable, type) =>  typeof(variable) === type;


console.log(valid(123123n, 'bigint'))
console.log(typeof 1312312n)
