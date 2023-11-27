function bind(context, func) {
    return function (...args) {
        func.apply(context, args);
    };
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: 'Roman', age: 19, job: 'Frontend' };
const person2 = { name: 'Maksim', age: 26, job: 'Software Eng' };

const boundLogPerson1 = bind(person1, logPerson);
const boundLogPerson2 = bind(person2, logPerson);

boundLogPerson1();
boundLogPerson2();
