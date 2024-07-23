function decoratorTimeout (func, time) {
    return function() {
        setTimeout(() => func.apply(this, arguments), time);
    };
}
const funcLog = (text) => {
    console.log(text)
}


let f100 = decoratorTimeout(funcLog, 1000)

f100('ads')

