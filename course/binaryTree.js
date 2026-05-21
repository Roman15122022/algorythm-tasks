class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BinarySearchTreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return this;
      }

      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }

        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }

        currentNode = currentNode.right;
      }
    }

    return this;
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  findMin() {
    if (!this.root) {
      return null;
    }

    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  findMax() {
    if (!this.root) {
      return null;
    }

    let currentNode = this.root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);

    return this;
  }

  removeNode(node, value) {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    }

    if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    }

    if (!node.left && !node.right) {
      return null;
    }

    if (!node.left) {
      return node.right;
    }

    if (!node.right) {
      return node.left;
    }

    const minRightValue = this.findMinFromNode(node.right);

    node.value = minRightValue;
    node.right = this.removeNode(node.right, minRightValue);

    return node;
  }

  findMinFromNode(node) {
    let currentNode = node;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  inOrder() {
    const result = [];

    this.traverseInOrder(this.root, result);

    return result;
  }

  traverseInOrder(node, result) {
    if (!node) {
      return;
    }

    this.traverseInOrder(node.left, result);
    result.push(node.value);
    this.traverseInOrder(node.right, result);
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log(tree.contains(7));
console.log(tree.contains(100));
console.log(tree.findMin());
console.log(tree.findMax());
console.log(tree.inOrder());

tree.remove(10);

console.log(tree.inOrder());
