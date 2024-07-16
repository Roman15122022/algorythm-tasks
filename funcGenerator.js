function* FuncGenerator () {
    yield 1
    yield 2
    return 3
}

const generator = FuncGenerator()


const one = generator.next()

const two = generator.next()
const {value: three} = generator.next()

console.log(one)
console.log(two)
console.log(three)
