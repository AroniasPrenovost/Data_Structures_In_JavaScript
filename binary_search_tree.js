// Binary Search Tree

// A collection of nodes that are all connected together ina  certainw way. 
// Each node may have 2 child nodes - a left node and a right node 
// Each contains data or value

// Binary Search Trees are Recursive
// Recursion is when a function calls itself

// Often used to store data as they are very fast to search and retrieve data from
// it's also quick to add and delete info from binary search trees
// that's because each method is primarily using binary search 

// Binary Run Time = O (log n)

// A balanced tree means each node has a left + right child 
// Otherwise, it becomes a linked list, technically

// Applications: dictionary, phone book, user directory

/* example */
function factorial(num) {
  if (num === 1) {
    return num;
  } else { // recursive case 
    return num * factorial(num - 1);
  }
}

factorial(4);
/* example */

function BST(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

// Insert Method 
BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  }
  else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};
 
// Contains Method
BST.prototype.contains = function(value) {
  if (this.value === value) return true;
  if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  }
  else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

// Depth First Traversal Method
// Great for searching through data by hierarchy - similar to a corporate
// structure or military rank tree
BST.prototype.depthFirstTraversal = function(iteratorFunc) {
  // if there is a left child, run our depthFirstTraversal method on it
  if (this.left) this.left.depthFirstTraversal(iteratorFunc);
  iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc);
}

// the above method is recursive and runs the iterator function
// from left to right, followed by their subtrees

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === 'pre-order') iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'post-order') iteratorFunc(this.value);
};

// passes whole entire node
BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this];
  while (queue.length) { // run as long as it's not empty
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
};

 
BST.prototype.getMinVal = function() {
  if (this.left) return this.left.getMinVal();
  else return this.value;
};
 
BST.prototype.getMaxVal = function() {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};
 
 
var bst = new BST(50);
 
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);
 
// test contains method
// console.log(bst.contains(15));

// function log(value) {
//   console.log(value);
// }

function log(node) {
 console.log(node.value);
}
 
console.log('MIN: ', bst.getMinVal());
console.log('MAX: ', bst.getMaxVal());

bst.breadthFirstTraversal(log);
 