const obj = {
  roma: '1', liza: '2', dogs: '3', * [Symbol.iterator]() {
    yield this.roma + 'roma'
    yield this.liza
    yield this.dogs
  }
}

for (const key of obj){
  console.log(key)
}

const r = obj[Symbol.iterator]()

console.log(r.next())
