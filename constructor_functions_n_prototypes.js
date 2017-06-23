// What is a constructor function? 

// A function that creates an object class, and allows you 
// to easily create multiple instances of said class.

// It's best practice to capitalize constructor functions
function User(firstName, lastName, age, gender) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.gender = gender;
};

// notice the 'this' keyword refers to each of the user objects 

// create new user 
var user1 = new User('John', 'Smith', 23, 'male'); 

// > 'user1' returns 
User {firstName: 'John', lastName: 'Smith', age: 23, gender: 'male'}

// create another 
> var user200 = new User('Jill', 'Robinson', 25, 'female');

// > 'user200' returns
User {firstName: 'Jill', lastName: 'Robinson', age: 25, gender: 'female'};

// manipulate prototype objects
User.prototype.emailDomain = '@facebook.com';

// we add this to the protoype, but note that it only appear
// in the dunder proto ('double underscore prototype')
> user200.emailDomain
// returns '@facebook.com'

// if we want all user instances to gave a 'get Email' function ...
User.prototype = getEmailAddress = function() {
	return this.firstName + this.lastName + this.emailDomain;
}

// again, this adds the property to every user instance 

> user200.getEmailAddress();
// returns jillRobinson@Facebook.com