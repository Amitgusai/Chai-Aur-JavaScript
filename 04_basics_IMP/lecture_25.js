("..........................................      JavaScript Execution Context       ............................................");

("Important for InterView: ");

// HOW Code Execution works:

// Before running phases: Very Important
// Whenever we give javascript a code program, then always a Global Execution Context will be created which is referred to 'this' ; 
// GEC, will it contain the value of this is another matter;
// IN browser, value of 'this' is Window Object;

// JavaScript is single threaded, everything is a Process 

("Execution Context:");
// 1. Global Execution Context
// 2. Function Exucution Context
// 3. Eval Execution Context: this is a part of Global Execution Phase (can read for Interview but not neccesary);


("Phases");
// JavaScript runs a program in 2 phases:
// 1. Memory Creation/Allocation phase
// 2. Execution phase

Example: 
let va1 = 10;
let val2 = 5;
function addNum(num1, num2){
    let total = num1 + num2;
    return total;
};
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// 1. Global Execution Context(1 time): 
// This code is Allocated/referred to 'this';

// 2. Execution Context:

// A. Memory Creation/Allocation Phase:

// All the variable are created but not defined
// val1 = undefined
// val2 = undefined
// addNum = definition (All the function definition is given to addNum)
// result1 = undefined
// result2 = undefined

// B. Execution Phase:

// val1 = 10
// val2 = 5
// addNum - It is only a definition, not execution (not include in Execution Phase)

// result1 = addNum - This addNum creates a seperate Execution Context containing 'new variable environment' + 'Execution Thred' (think as a BOX);
    // For addNum:
    // 1. Memory phase:
    // val1 = undefined
    // val2 = undefined
    // total = undefined

    // 2. Execution phase:
    // num1 = val1 = 10
    // num2 = val2 = 5
    // total = 15
    // This total is returned to the Global Execution Context
// Now the Execution Context is DELETED

// result1 = 15

// Similar with result2 = addNum 
// Write down the Execution Context for result2

(".........................................................         Call Stack      .....................................................");







