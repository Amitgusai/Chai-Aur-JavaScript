(".......................................................       CONTROL FLOW        ...................................................");

// Everytime the whole code should not run - It should be condition based (e.g - Login, logout);

// Operaters:
// <, >, <=, >=, !=,
// == (check),
// === (also checks data type)

("...................................       if_else conditional statements: ");

if (3 === "3") {
  console.log("executed");
}

const temperature = 41;

if (temperature < 50) {
  console.log("less than 50");
} else {
  console.log("temperature is greater than 50");
}
// console.log("temperature is greater than 50");


("......................................        SCOPE:");

const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`user power: ${power}`);
}

// console.log(`user power: ${power}`);
// Scope of power in function only

("......................................        ShortHand Notation:");
// Shorthand notation: Condenses if statements for simple conditions (balance > 500 example).

const balance = 1000;
if (balance > 500) console.log("test");
// Implicit


("......................................        Nesting:");

if (balance > 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else {
  console.log("greater than 999");
}


// Real Life Example:
("....................................          Logical Operators: ");

// && (AND): Both conditions must be true for the code within if to execute (userLoggedIn && debitCard example).
// || (OR): At least one condition must be true for the code within if to execute (loggedInFromGoogle || loggedInFromEmail example).

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = false;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}
MultipleConditions:
if (loggedInFromGoogle || loggedInFromGoogle) {
  console.log("Proceed");
};


("........................................          Switch_Case:");
// Syntax:

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = "march";

switch (month) {
  case "january":
    console.log("january");
    break;
  case 2:
    console.log("February");
    break;
  case "march":
    console.log("March");
    break;
  default:
    console.log("This is Default");
    break;
}
// break is important as if not then it will execute the whole code after it even if condition satisfied;
// Exception - default

("............................................          InterView Question:");

// 1. Highlights the concept of "falsy" and "truthy" values.
// 2. Demonstrates checking for empty arrays and objects using length and key count respectively.
// 3. Points out the equality comparison behavior (false == 0, false == "", and 0 == "" all evaluate to true).

// There are some values which are always false or always true;

const userEmail = "amit2004@gmail.com";
const userMail = [];

if (userMail) {
  console.log("Got the email");
} else {
  console.log("Don't have user email");
}

// Falsy values:
// false, 0, -0, BigInt (0n), "", undefined, null, NaN

// Truthy values:
// "0", 'false', " ", [], {}, function(){} (empty function)


("..............................................        Important Concept:")

// To check Array:
if (userMail.length === 0) {
  console.log("Array is Empty");
} else {
  console.log("Array contains Value");
}

// To Check Object:
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
}

// false == 0  : true;
// false == "" : true;
// 0 == ""     : true;

(".........................................       Nullish Coalescing Operator (??) - Projects ");

("FallBack");
// 1. null
// 2. undefined

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10;
// In position of 10 - we apply a complex function calling a database and if doesn't return a value then assign val1 = null;
val2 = undefined ?? 15;

// Additional Case:
val3 = null ?? 10 ?? 20;

console.log(val1);
console.log(val2);
console.log(val3);
// Sometimes, When we call from a Database (FireBase, AppWrite), we don't get the respond directly - chances are we can get two values (null or undefined)

("...........................................           Terniary Operator: ");

// Uses the condition, a question mark, a value if true, a colon, and a value if false

const iceTea = 100;
// condition ? true : false
iceTea < 80 ? console.log("less than 80") : console.log("more than 80");
