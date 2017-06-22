// What is a constructor function? 

// a function that creates an object class, and allows you 
// to create multiple instances of that class very easily. 

// capitlizing the function signifies it is a constructor 
function User(firstName, lastName, age, gender) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.gender = gender;
};

// the 'this' keyword refers to each of the user objects
// we'll be creating 

// crate new user 
var user1 = new User('John', 'Smith', 23, 'male'); 

// typing 'user1' in the console returns 
> User {firstName: 'John', lastName: 'Smith', age: 23, gender: 'male'}

// create another 
var user200 = new User('Jill', 'Robinson', 25, 'female');

// typing in 'user200'
> User {firstName: 'Jill', lastName: 'Robinson', age: 25, gender: 'female'}
