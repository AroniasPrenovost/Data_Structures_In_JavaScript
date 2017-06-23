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
 	this.previous = prev;
 }

// create demo linked list 
var node1 = new Node(100, 'node2', null);
console.log(node1);
// { value: 100, next: 'node2', previous: null }
// => undefined