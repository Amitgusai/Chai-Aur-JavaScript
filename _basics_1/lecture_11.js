"..................................................          Strings         ........................................................";

let name = "amit gusai";

const repo_count = 8;

console.log(name + repo_count);
// Not a good Syntax

console.log(
  `My name is ${name.toUpperCase()} and repo count is ${repo_count}.`
);
// String Interpolation : Modern way (can use method as well on the go)

const str_object = new String("amit");
// 'new' keyword is used to create a new object.

// Manual or Explicitly creating String wrapper object for allowing using methods
// In JavaScript, the new String() is a constructor function` wthich is used to create a new String object.

// Wrapper Objects:
// In JavaScript, primitives (like String) do not have properties or methods.
// However, JavaScript allows you to work with primitives as if they were objects.
// It does this by creating a temporary String object, allowing you to use its methods, and then discarding the object once the operation is complete.
// This is done automatically, but you can also create a String object manually with new String().

const demo = "    Amit_gusai     ";
const tutorial = "Good";

// Common Methods used in String:

console.log(demo.toUpperCase());
console.log(demo.toLowerCase());
console.log(demo.trim());
// space removal
console.log(demo.replace("Amit", "Anjali"));
console.log(demo.split("_"));
// converting to array with a seperator
console.log(demo.charAt(10));
console.log(demo.indexOf("A"));
console.log(demo.includes("sai"));
// question
console.log(demo.startsWith(" "));
console.log(demo.substring(8, 15));
// last not included
console.log(demo.slice(6, -4));
// Can also take -ve numbers unlike substring
console.log(demo.length);
console.log(demo.concat(tutorial));
console.log(demo[10]);

/* 
`console.log(demo.__proto__)` is accessing the prototype of the `demo` string object. 
In JavaScript, every object has a prototype, which is an object from which it inherits methods and properties. 
By accessing the `__proto__` property, you can see the prototype object of the `demo` string object. 
*/

console.log(demo.__proto__); // Obtained an Object
