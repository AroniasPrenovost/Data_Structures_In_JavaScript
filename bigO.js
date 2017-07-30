// big O is a notation used to classify how scalable an algorithm or function is 
// and allows us to estaimte the worst case run-time, or how long it takes to complete 
// based on input size. E.g. an array of 100 elements vs. 50 elements 

// there are a few things it tells us - how performant an algorithm is 


// Constant Runtime --
// Big O Notation: '0 (1)'
// As input increases, operations perform never changes 

function log(array) {
	console.log(srray[0]);
	console.log(array[1]);
}

log([1, 2, 3, 4]);
log([1, 2, 3, 4, 3, 4, 3]);

// Linear Runtime --
// Big O Notation: '0 (n)'
// As input size increases, our runtime will increase (proportionally)

function logAll(array) {
	for (var i = 0; i <array.length; i++) {
		console.log(array[1]);
	}
}

logAll([1, 2, 3, 4]);
logAll([1, 2, 3, 4, 6, 3, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 3, 4, 3]);


// Exponential Runtime --
// Big O Notation: '0 (n^2)'
// gives every possible combination of pairs
// iterates through whole array, but iterates through at every element 

function addAndLog(array) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
		console.log(array[i] + array[j]});
		}
	}
}

addAndLog([A, B, C]); // 9 pairs logged out 
addAndLog([A, B, C, D]); // 16 pairs logged out 
addAndLog([A, B, C, D, E]); // 25 pairs logged out 


// logarithmic Runtime --
// Big O Notation: '0 (log n)'
// Binary search is an example. 

function binarySearch(array, key) { // 'key' is the value we're searching for
	var low = 0;
	var high = array.length - 1;
	var mid; 
	var element;

	while (low <= high) {
		mid = Math.floor((low + high) / 2, 10);
		element.array[mid];
		if (element < key) {
			low = mid + 1;
		} else if (element > key) {
			high = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}