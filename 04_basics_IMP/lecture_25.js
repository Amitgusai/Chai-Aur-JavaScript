("..........................................      JavaScript Execution Context       ............................................");

("Important for InterView: ");

("Execution Context:");
// 1. Global Execution Context (GEC): 
// Created once at the beginning of code execution. 
// It manages global variables and functions and binds the this keyword to the global object (usually 'window' in browsers).

// 2. Function Execution Context (FEC): 
// Created whenever a function is called. 
// It manages function-specific variables, arguments, and the local value of this.

// 3. Eval Execution Context: this is a part of Global Execution Phase (can read for Interview but not neccesary);


("Phases");
// JavaScript runs a program in 2 phases:
// 1. Memory Creation/Allocation phase
// 2. Execution phase

("Example Breakdown: ")
let va1 = 10;
let val2 = 5;
function addNum(num1, num2){
    let total = num1 + num2;
    return total;
};
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

("1. Global Execution Context (GEC):")
// Created once at the beginning of the script.
// Inside the GEC:
    // Execution phase Occurs:
        // 1. Memory Creation Phase
        // 2. Execution Phase

// "Initial values for variables are set to undefined by default, while functions are stored with their definitions (code)."

// Memory Creation Phase:
// Contains:
    // val1 (undefined)
    // val2 (undefined)
    // addNum function definition (not the code execution)
    // result1 (undefined)
    // result2 (undefined)

("2. Execution Phase:")

// A. Global Execution Context:

// val1 is assigned the value 10.
// val2 is assigned the value 5.
// No function execution happens in this phase. addNum is only defined.


// B. First Function Call (result1 = addNum(val1, val2)):
// A new Function Execution Context (FEC) is created for addNum.
// The new Function Execution Context contains 'new variable environment' + 'Execution Thred' (think as a BOX);

// FEC for addNum:
// Memory Creation/Allocation:
//     num1 (undefined)
//     num2 (undefined)
//     total (undefined)
// Execution Phase:
//     num1 is assigned the value of val1 (which is 10).
//     num2 is assigned the value of val2 (which is 5).
//     total is calculated as 10 + 5 = 15.
//     The value of total (15) is returned back to the Global Execution Context.

//     Now the Execution Context is DELETED
//     The variable result1 in the Global Execution Context is assigned the value returned from the addNum function (15).


// C. Second Function Call (result2 = addNum(10, 2)):
// A new Function Execution Context (FEC) is created for addNum. Similar steps as before occur, but with different argument values, resulting in result2 being assigned the value 12.

("Important Notes:")

// Each function call creates a separate function execution context that is independent of other contexts. 
// This ensures proper scoping and isolation of function behavior

// The this keyword within a function context typically refers to the object that invoked the function. 
// However, its behavior can be influenced by various factors, including strict mode, call, apply, and bind methods.


(".........................................................         Call Stack - LIFO      .....................................................");

("The Call Stack:")
// The call stack is a crucial data structure in JavaScript that plays a vital role in managing function execution.
// It operates on the principle of Last-In, First-Out (LIFO), meaning the most recently called function is the first to be executed and finished.

Example:
function one() {
    console.log("one");
    two();
};
function two() {
    console.log("two");
    three();
};
function three() {
    console.log("three");
};

one();
two();
three();

("Execution Flow:")

// Global Execution Context (GEC):
// The script begins by creating the GEC.

// Inside the GEC, the functions one, two, and three are defined.

        // 1.  one() is the first function called.
        //     Calling one():

        // 2.  one() is added to the top of the call stack.
        //     It logs "one" to the console.
        //     Since one() calls two(), it's pushed onto the stack as well.
        //     Calling two():

        // 3.  two() logs "two" to the console.
        //     two() then calls three(), pushing it onto the stack.
        //     Calling three():

        // 4.  three() logs "three" to the console.
        //     Now, three() doesn't call any other functions, so it finishes its execution.

        // Stack LIFO Action:
        // Following the LIFO principle, the first function to be finished, three(), is removed (popped) from the stack.

        // 5.  two() Resumes:

        // Now, control goes back to the previously paused function, two().
        // Since there are no more statements in two(), it finishes and is popped from the stack.

        // 6.  one() Completes:

// Finally, control returns to one().
// As there are no more statements in one(), it finishes and is popped from the stack.
