("..........................................        While Loop and Do-while Loop        .....................................");

("while loop Syntax:");

// A while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition.

let index = 0;
while (index <= 10) {
    console.log(`value of index is ${index}`);
    // End statement
    index = index + 1;
};

("While loop in Array:");

let myArray = ["amit", "hitesh", "anjali", "gusai"];
let j = 0;

while (j < myArray.length) {
    console.log(`value is : ${myArray[j]}`);
    j++;
};


("Do-While loop:");

// This loop will execute the block of code once, before checking if the condition is true, 
// then it will repeat the loop as long as the condition is true.

let i = 8;

do {
    console.log(`Value of i is ${i}`);
    // END statement;
    i--;
} while (i > 0);
