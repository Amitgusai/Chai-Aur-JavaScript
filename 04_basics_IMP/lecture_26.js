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
// break is important as if not then it will execute the whole code after that even if condition is already satisfied;
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

// Checking for empty Arrays [] length.

if (userMail.length === 0) {
  console.log("Array is Empty");
} else {
  console.log("Array contains Value");
}

// Checking for empty Objects {} key count.
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
}

// false == 0  : true;
// false == "" : true;
// 0 == ""     : true;

(".........................................       Nullish Coalescing Operator (??) - Projects ");

("FallBack");
// This '??' operator is used to check the value of the left-hand operand. 
// If it is null or undefined, it will return the value of the right-hand operand (Default). 
// If the left-hand operand is any other value (including 0, false, or an empty string), it will return the left-hand operand.

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


("................................................................           Practical Example (DATABASE):         ...............................................");


// When calling a database, you might not get a response immediately, and the response might be null or undefined. 
// The nullish coalescing operator allows you to provide a default value in case the response is null or undefined.

// Assume we have a function getUserEmail that fetches a user's email from the database

            async function getUserEmail(userId) {
              // This function would typically interact with the database and return the email
              // For this example, let's assume it returns null
              return null;
            }

            let defaultEmail = "no-email@example.com";

            let userEmail2 = await getUserEmail("someUserId") ?? defaultEmail;

            console.log(userEmail2); // Outputs: "no-email@example.com"
            

// In this example, 
// getUserEmail("someUserId") is null because the user didn't provide an email. 
// So, the nullish coalescing operator checks the result of getUserEmail("someUserId") and since it's null, it returns the value of defaultEmail. 
// Therefore, userEmail will be "no-email@example.com".

// If the user had provided an email, getUserEmail("someUserId") would not be null or undefined, and the nullish coalescing operator would return the user's email instead of the default email.


("...........................................           Terniary Operator: '?' ");

// Uses the condition, a question mark, a value if true, a colon, and a value if false

const iceTea = 100;
// condition ? true : false
iceTea < 80 ? console.log("less than 80") : console.log("more than 80");
// Similar to if...else 
