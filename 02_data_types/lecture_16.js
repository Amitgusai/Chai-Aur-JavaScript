".................................................          Object - 1        ...............................................................";

// Objects can be declared using two ways:

// 1. Constructor (SINGLETON created)
const singleton = new Object();

// 2. Literal (no singleton created)
const my_object = {
  name: "amit",
  age: 20,
  'weekday': "sunday",
  // Above can only be accessed though [" "] method
  email: "amit@google.com",
  isloggedin: false,
  lastLoginDays: ["monday", "wednesday"],
};

// Accessing: 2 ways
console.log(my_object.name);
console.log(my_object["age"]);
console.log(my_object["weekday"]);

("Interview Question: Take a symbol in Object and print it");

let my_sym = Symbol("key");
// (" It is necessary to initialize a symbol before including it in an object in JavaScript. ");
// (" This is because when you use a symbol as a property key in an object, JavaScript needs to know what that symbol represents.");

const object = {
  my_sym: "string",
  [my_sym]: "value",
  // To declare as Symbol
};

console.log(typeof object.my_sym);
// type is String
console.log(object[my_sym]);

my_object.email = "hitesh@gpt.com";
// Object.freeze(my_object);
// Freezing an Object

my_object.email = "microsoft.com";
console.log(my_object);

("Function_in_a_Object");

my_object.greeting = function () {
  console.log("Ram");
};

console.log(my_object.greeting);
// Function execute nahi hai , only the reference of function
console.log(my_object.greeting());
// Output : undefined
// As nothing is returned by function to my_object.greeting

// String Interpolation:

my_object.greeting_2 = function () {
  console.log(`This is my name ${this.name}`);
  // To refer to the properties of an Object: 'this' is used
  // It provides a way to access the properties and methods of the object within the method.
};

console.log(my_object.greeting_2());
// https://docs.google.com/document/d/1f7iAj6hTgg6jMYEfzjt4kxt3n2eFJvcwGOVeusMCe5I/edit?usp=sharing
