// Linked Lists

// A list of elements ('nodes') connectd ('linked') together
// in a single file line

// SINGLEY LINKED LIST 
// each node has reference to the next node 

// DOUBLE LINKED LIST 
// each node has reference to the previous and next nodes 

// to function, it only needs to know about two nodes, call pointers (head and tail)
// head pointer and tail pointer track these 

// every node we'll be searching through consist of JavaScript objects

function LinkedList() {
	this.head = null;
	this.tail = null;
}
 
 function Node(value, next, prev) {
 	this.value = value;
 	this.next = next;
 	this.prev = prev;
 }

LinkedList.prototype.addToHead = function(value) {  // creates method
var newNode = new Node(value, this.head, null); // creates new node 
	if (this.head) this.head.prev = newNode; // handles case if node
	else this.tail = newNode; // if empty, set the end to this node 
	this.head = newNode; // whether empty or not, we want our new node at front of list
};

// similar to add to head, just reverse
LinkedList.prototype.addToTail = function(value) {
	var newNode = new Node(value, null, this.tail);
	if (this.tail) this.tail.next = newNode;
	else this.head = newNode;
	this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
	if (!this.head) return null;
	var val = this.head.value;
	this.head = this.head.next;
	if (this.head) this.head.prev = null;
	else this.tail = null; 
	return val;
};

LinkedList.prototype.removeTail = function() {
	if (!this.tail) return null;
	var val = this.tail.value;
	this.tail = this.tail.prev;
	if (this.tail) this.tail.next = null;
	else this.head = null;
	return val;
}

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
 while(currentNode) {
   if (currentNode.value === searchValue) return currentNode.value;
  currentNode = currentNode.next; 
 }
 return null;
};

var myLL = new LinkedList();

myLL.addToHead(123);
myLL.addToHead(70);
myLL.addToTail('world');
myLL.addToTail(19);

console.log(myLL.search(10));

/*
var ll = new LinkedList();
ll.search();
*/
