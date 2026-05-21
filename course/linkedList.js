class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;

      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  find(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
      this.length--;
    }

    let currentNode = this.head;

    while (currentNode && currentNode.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
        this.length--;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail && this.tail.value === value) {
      this.tail = currentNode;
    }

    if (!this.head) {
      this.tail = null;
    }

    return deletedNode;
  }

  toArray() {
    const result = [];
    let currentNode = this.head;

    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }

  size() {
    return this.length;
  }
}
