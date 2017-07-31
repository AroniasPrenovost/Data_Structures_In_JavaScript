// Hash Tables

// A table with a predetermined length in which each of the cells in the 
// table holds a piece of data that has a key and a value 

// Powerful, because they provide us constant lookup time and insertion

// Lookup: O (1)
// Insertion: O (1)

// Have a very fast runtime, used to store data that is stored in the form 
// of a key associated with a value. 

// Con - data doesn't store references to other pieces of data in the data structure 

// array of values - currently empty
[ , , , , , , , , , , , , ]

{ 
	key: 'Jim'
  value: '555-2828'
}

// this places Jim in index 8 in the empty array as 'Jim', '555-3030'
'Jim' => 8

{ 
	key: 'Britney'
  value: '555-3328'
}

// puts her at index 3
'Britney' => 3

// GET method to retrieve the data 
function get('Jim') => 8

// If two keys get hasked into the same index, it's called a collision
// to fix that, we form each of the buckets into a single linked list

{ 
	key: 'John'
  value: '335-3328'
}
{ 
	key: 'Becka'
  value: '335-1328'
}

// added to index 8 (or 'bucket' 8)
'John' => 8
'Becka' => 8

// it basically creates a chain of objects within that index/bucket 
// that you'll have to traverse through 