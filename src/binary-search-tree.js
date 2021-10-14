const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    if (this._root === null) {
      this._root = new Node();
      this._root.data = data;
      return;
    }

    let currentRoot = this._root;
    while (true) {
      if (currentRoot.data === null) {
        currentRoot = data;
        return;
      }

      if (currentRoot.data === data) {
        return;

      } else if (currentRoot.data > data) {
        if (currentRoot.left === null) {
          currentRoot.left = new Node();
          currentRoot.left.data = data;
          return;
        }
        currentRoot = currentRoot.left;

      } else {
        if (currentRoot.right === null) {
          currentRoot.right = new Node();
          currentRoot.right.data = data;
          return;
        }
        currentRoot = currentRoot.right;
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if (this._root === null) {
      return null;
    }

    let currentNode = this._root;
    while (true) {
      if (currentNode.data === data) {
        return currentNode;
      }

      if (currentNode.data > data) {
        if (currentNode.left === null) {
          return null;
        }
        currentNode = currentNode.left;

      } else {
        if (currentNode.right === null) {
          return null;
        }
        currentNode = currentNode.right;
      }
    }
  }

  remove(data) {
    if (this._root === null) {
      return;
    }

    if (this._root.data === data) {
      if (this._root.left === null && this._root.right === null) {
        this._root = null;

      } else if (this._root.left === null) {
        this._root = this._root.right;

      } else if (this._root.right === null) {
        this._root = this._root.left;

      } else {
        if (this._root.left.left === null) {
          this._root.data = this._root.left.data;
          this._root.left = null;
        } else {
          this._root.data = this._max(this._root.left, true);
        }
      }

      return;
    }

    let parentNode = null;
    let parentNodeDirection = '';
    let currentNode = this._root;

    while (true) {
      if (currentNode.data === data) {
        if (currentNode.left === null && currentNode.right === null) {
          parentNode[parentNodeDirection] = null;

        } else if (currentNode.left === null) {
          parentNode[parentNodeDirection] = currentNode.right;

        } else if (currentNode.right === null) {
          parentNode[parentNodeDirection] = currentNode.left;

        } else {
          const value = this._max(currentNode.left);
          this.remove(value);
          currentNode.data = value;
        }
        return;

      } else if (currentNode.data > data) {
        if (currentNode.left === null) {
          return;
        }
        parentNodeDirection = 'left';
        parentNode = currentNode;
        currentNode = currentNode.left;

      } else {
        if (currentNode.right === null) {
          return;
        }
        parentNodeDirection = 'right';
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
  }

  min() {
    return this._min(this._root);
  }

  _min(root, remove = true) {
    if (root === null) {
      return null;
    }

    let currentNode = root;
    let parentNode = null;
    while (true) {
      if (currentNode.left === null) {
        return currentNode.data;
      }

      parentNode = currentNode;
      currentNode = currentNode.left;
    }
  }

  max() {
    return this._max(this._root);
  }

  _max(root) {
    if (root === null) {
      return null;
    }

    let currentNode = root;
    let parentNode = null;
    while (true) {
      if (currentNode.right === null) {
        return currentNode.data;
      }

      parentNode = currentNode;
      currentNode = currentNode.right;
    }
  }
}
