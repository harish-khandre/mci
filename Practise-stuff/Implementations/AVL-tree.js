class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // Helper function to get the height of a node
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Helper function to update the height of a node
  updateHeight(node) {
    if (node === null) return;
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Helper function to perform left rotation
  rotateLeft(node) {
    let newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;
    this.updateHeight(node);
    this.updateHeight(newRoot);
    return newRoot;
  }

  // Helper function to perform right rotation
  rotateRight(node) {
    let newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;
    this.updateHeight(node);
    this.updateHeight(newRoot);
    return newRoot;
  }

  // Helper function to get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Helper function to balance the tree
  balance(node) {
    if (node === null) return node;

    this.updateHeight(node);

    let balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1) {
      if (this.getBalanceFactor(node.left) < 0) {
        node.left = this.rotateLeft(node.left);
      }
      return this.rotateRight(node);
    }
    if (balanceFactor < -1) {
      if (this.getBalanceFactor(node.right) > 0) {
        node.right = this.rotateRight(node.right);
      }
      return this.rotateLeft(node);
    }

    return node;
  }

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this._insert(this.root, value);
  }

  _insert(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    } else {
      return node; // Duplicate value not allowed
    }

    return this.balance(node);
  }

  // Helper function to find the minimum node in a subtree
  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // Delete a value from the AVL tree
  delete(value) {
    this.root = this._delete(this.root, value);
  }

  _delete(node, value) {
    if (node === null) return node;

    if (value < node.value) {
      node.left = this._delete(node.left, value);
    } else if (value > node.value) {
      node.right = this._delete(node.right, value);
    } else {
      if (node.left === null || node.right === null) {
        return node.left || node.right;
      }
      let minRightNode = this.findMinNode(node.right);
      node.value = minRightNode.value;
      node.right = this._delete(node.right, minRightNode.value);
    }

    return this.balance(node);
  }

  // Inorder traversal of the AVL tree
  inorderTraversal(node = this.root, result = []) {
    if (node !== null) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }
}

// Example usage:
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

console.log("Inorder traversal:", avlTree.inorderTraversal()); // Output: [10, 20, 25, 30, 40, 50]

avlTree.delete(30);
console.log("Inorder traversal after deletion:", avlTree.inorderTraversal()); // Output: [10, 20, 25, 40, 50]
