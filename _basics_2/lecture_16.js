".................................................          Object        ...............................................................";

// Objects can be declared using two ways:

// 1. Constructor (SINGLETON created)
Object.create;

// 2. Literal (no singleton created)
const my_object = {
  name: "amit",
  age: 20,
  "weekday": "sunday",
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

const my_sym = Symbol("key");
const object = {
  my_sym: "string",
  [my_sym]: "key",
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

my_object.greeting = function () {
  console.log("Ram");
};

console.log(my_object.greeting);
// Function execute nahi hai , only the reference of function
console.log(my_object.greeting());
// Output : undefined

// String Interpolation:

my_object.greeting_2 = function (){
  console.log(`This is my name ${this.name}`);
  // To refer to the properties of an Object: 'this' is used
  // It provides a way to access the properties and methods of the object within the method.
};

console.log(my_object.greeting_2());
