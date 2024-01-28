function passwordGen() {
    const count = Math.floor(Math.random() * 15) + 6;
    let pass = ''
    for (let i = 0; i < Math.floor(count / 3); i++) {
        pass += getRandomNum();
        pass += gerRandomLetter();
        pass += gerRandomLetter().toUpperCase();
    }
    return pass;
}

function getRandomNum() {
    const numbers = '0123456789';
    const num = Math.floor(Math.random() * 10);
    return numbers.split('')[num];
}

function gerRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letter = Math.floor(Math.random() * 26)
    return alphabet[letter];
}

console.log(passwordGen())
