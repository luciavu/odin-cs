class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  setLeft(left) {
    this.left = left;
  }

  setRight(right) {
    this.right = right;
  }
}

export default class Tree {
  constructor(array) {
    console.log([...new Set(array)].sort((a, b) => a - b));
    this.root = this.buildTree([...new Set(array)].sort((a, b) => a - b)); // Remove duplicates, sort numerically
    this.prettyPrint(this.root);
  }

  buildTree(array) {
    if (array.length === 0) return null;

    const mid = Math.floor(array.length / 2);
    const root = new Node(array[mid]);
    root.setLeft(this.buildTree(array.slice(0, mid)));
    root.setRight(this.buildTree(array.slice(mid + 1)));
    return root;
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return;
    }

    let curr = this.root;

    while (curr !== null) {
      if (value < curr.data) {
        if (curr.left === null) {
          curr.setLeft(node);
          return;
        }
        curr = curr.left;
      } else {
        if (curr.right === null) {
          curr.setRight(node);
          return;
        }
        curr = curr.right;
      }
    }
  }

  deleteItem(value) {
    const node = this.find(value);
    if (this.root === null || node === null) return;
    const parent = this.getParent(node.data);

    // If leaf node, simple delete
    if (node.left === null && node.right === null) {
      this.replaceChild(parent, value, null);
    } else if (node.left !== null && node.right !== null) {
      // If two leaf nodes, replace with successor
      let successor = this.getSuccessor(node.right);
      node.data = successor.data;
      this.deleteItem(successor.data);
    } else {
      // If one leaf, leaf node replaces it
      const child = node.left === null ? node.left : node.right;
      this.replaceChild(parent, value, child);
    }
  }

  replaceChild(parent, value, newChild) {
    if (parent === null) {
      this.root = newChild;
    } else if (parent.data > value) {
      parent.setLeft(newChild);
    } else {
      parent.setRight(newChild);
    }
  }

  getParent(value) {
    let curr = this.root;
    let parent = null;

    while (curr !== null && curr.data !== value) {
      parent = curr;
      curr = value < curr.data ? curr.left : curr.right;
    }
    return parent;
  }

  getSuccessor(curr) {
    if (curr === null || curr.right === null) return null;

    curr = curr.right;
    while (curr.left !== null) {
      curr = curr.left;
    }
    return curr;
  }

  find(value) {
    let curr = this.root;
    while (curr !== null && curr.data !== value) {
      // Traverse left if value is less than current node's data, right if higher
      curr = value < curr.data ? curr.left : curr.right;
    }
    return curr;
  }

  levelOrder(callback) {
    if (callback === null) throw new Error('Please provide a callback function.');
    if (this.root === null) return;

    let toVisit = [this.root];

    while (toVisit.length > 0) {
      let node = toVisit.shift();
      // Call callback
      callback(node.data);
      // Add left and right children to the queue
      if (node.left !== null) {
        toVisit.push(node.left);
      }
      if (node.right !== null) {
        toVisit.push(node.right);
      }
    }
  }

  // LDR
  inOrder(callback) {
    if (callback === null) throw new Error('Please provide a callback function.');
    if (this.root === null) return;

    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      callback(node.data);
      traverse(node.right);
    }
    traverse(this.root);
  }

  // DLR
  preOrder(callback) {
    if (callback === null) throw new Error('Please provide a callback function.');
    if (this.root === null) return;

    function traverse(node) {
      if (node === null) return;
      callback(node.data);
      traverse(node.left);
      traverse(node.right);
    }
    traverse(this.root);
  }

  //LRD
  postOrder(callback) {
    if (callback === null) throw new Error('Please provide a callback function.');
    if (this.root === null) return;

    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      callback(node.data);
    }
    traverse(this.root);
  }

  // Longest path of edges from node to leaf
  height(node) {
    if (node === null) return -1; // -1 if empty
    if (node.left === null && node.right === null) return 0; // Is leaf node

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Longest path from root to node
  depth(node) {
    if (this.root === null || node === null) {
      return -1;
    }

    let depth = 0;
    let curr = this.root;

    while (curr !== null) {
      if (curr.data === node.data) return depth;
      curr = node.data < curr.data ? curr.left : curr.right;
      depth++;
    }
    return null;
  }

  // Difference in height of left and right subtree <= 1
  isBalanced() {
    if (this.root === null) return true;

    const checkBalance = (node) => {
      if (node === null) return true;

      let leftHeight = this.height(node.left);
      let rightHeight = this.height(node.right);

      return (
        Math.abs(leftHeight - rightHeight) <= 1 &&
        checkBalance(node.left) &&
        checkBalance(node.right)
      );
    };
    return checkBalance(this.root);
  }

  rebalance() {
    const sortedArray = [];
    this.inOrder((data) => sortedArray.push(data));
    this.root = this.buildTree(sortedArray);
  }

  // Helper function to visualise the tree
  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}
