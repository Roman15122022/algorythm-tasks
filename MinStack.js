class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  pop() {
    const value = this.stack.pop();

    if (value === this.minStack.at(-1)) {
      this.minStack.pop();
    }

    return value;
  }

  push(value) {
    this.stack.push(value);

    if (this.minStack.at(-1) >= value || !this.minStack.length) {
      this.minStack.push(value);
    }
  }

  getMinValue() {
    return this.minStack.at(-1);
  }
}


const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMinValue()); // -> -3
minStack.pop();
console.log(minStack.getMinValue());    // -> -2
console.log(minStack.getMinValue()); // -> -2
