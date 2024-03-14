("..............................................     SCOPE AND MINI-HOISTING     ..............................................");

("Closure: ");
function one() {
  const username = "amit";
  console.log(username);

  Closure: function two() {
    const website = "youtube";
    console.log(username);
    console.log(website);
  }
  // console.log(website); No Scope
  two();
}

// one();

Closure: if (true) {
  const username = "hitesh";
  if (true) {
    const website = "youtube";
    // console.log(username + website);
  }
  // console.log("website");
  // Output: Error
}

// console.log(username);
// Output: Error

("...............................................           Interesting  - Function Declaration (Mini-hoisting)           ...........................................");

("1:");

console.log(addOne(5));
function addOne(num) {
  return num + 2;
}

// Output: 7 (No Error);

// For example, if you have a function that you call before it's declared in your code,
// JavaScript will still understand what you mean because it "hoists" (raise) the function declaration to the top of its scope.
// This means it's as if you call the function at the very top of your code, even though you actually declared it later on.

// However, it's important to note that only the declarations are hoisted, not the initializations.
// This means if you try to use a variable before it's been initialized (given a value), you'll get 'undefined'. (Only in case of 'var')

("2:");

console.log(addTwo(5));
// Also known as Expressions:

const addTwo = function (num) {
  return num + 2;
};

// var is function-scoped.
// let and const are block-scoped, meaning they only exist within the block they are declared in. 

// Output: Cannot access 'addTwo' before initialization (Error found);

("Interview Question:");
// Does hoisting happen in let and const? 
// Ans: It's not that hoisting doesn't happen with let and const, 
//      but rather that the variables are not initialized during hoisting, leading to different behavior compared to var.
