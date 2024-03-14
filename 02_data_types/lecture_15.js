".............................................           Array - 2       ....................................................";

const chai = ["black", "green", "lemon", "milk"];
const coffee = ["hot", "capechino", "latte"];

chai.push(coffee);
// It takes coffee array as a data
console.log(chai);

console.log(chai[4][1]);
// Accessing it

const all = chai.concat(coffee);
// Creating a new array : all
console.log(all);

("spread operator");

const all_new = [...chai, ...coffee];
// Not limited to only 2 arrays unlike concat()
console.log(all_new);
// It result in forming a new array - all_new
console.log(typeof all_new);
// NON-primitive are all Objects

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, 9, [1, 2, [4, 5, 7]]];
const real_array = another_array.flat(1);   // Infinity
console.log(real_array);

("Specially used in Data/Web Sraping");

console.log(Array.isArray("amit"));
// checking is it a array

console.log(Array.from("amit"));
// Converting any type to array

let ans = "hitesh choudhary";
console.log(Array.from(ans));
// Converting any type to array

console.log(Array.of("amit", 2, 3, 4));
// Creates a new array from a set of elements

("Array Destructuring");

let dectruct = ["amit", 10, "ram"];
let [name, surname, god] = dectruct;
// This created a variable or data type in itself which has seperate reference from the array
name = "rahul";
// console.log(dectruct[0])
// console.log(dectruct[1])
console.log(name);
console.log(surname);
console.log(typeof name);
console.log(typeof surname);
