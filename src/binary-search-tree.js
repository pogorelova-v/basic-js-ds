const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.rootT = null;
  }

  root() {
    return this.rootT;
  }

  add(data) {
    this.rootT = addIn(this.rootT, data);
    function addIn(node, data) {
      if (!node) {
        return new Node(data);

      } else if (node.data === data) {
        return node;
        
      } else if (data < node.data) {
        node.left = addIn(node.left, data);

      } else {
        node.right = addIn(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchIn(this.rootT, data);
    function searchIn(node, data) {
      if (!node) {
        return false;
      } else if (node.data === data) {
        return true;
      } else if( data < node.data ) {
        return searchIn(node.left, data)
      } else {
        return searchIn(node.right, data);
      } 
    }
  }

  find(data) {
    return searchIn(this.rootT, data);
    function searchIn(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      } else if( data < node.data ) {
        return searchIn(node.left, data)
      } else {
        return searchIn(node.right, data);
      } 
    }
  }

  remove(data) {
    this.rootT = removeNode(this.rootT, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootT) {
      return null;
    }
    let node = this.rootT;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootT) {
      return null;
    }
    let node = this.rootT;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};