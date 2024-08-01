class Calc {
    plus(a: number, b: number): number {
        return a + b
    }
    plus(a: string, b: string): string {
      return a + b
    }
}

const cal = new Calc()

console.log(cal.plus(1,2))
console.log(cal.plus('1','2'))
