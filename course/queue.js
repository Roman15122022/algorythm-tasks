class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(value) {
    this.items[this.tailIndex] = value;
    this.tailIndex++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const removedValue = this.items[this.headIndex];

    delete this.items[this.headIndex];
    this.headIndex++;

    return removedValue;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.headIndex];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.tailIndex - this.headIndex;
  }

  clear() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
}
