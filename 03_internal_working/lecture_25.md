# JAVASCRIPT EXECUTION CONTEXT 

## Execution Context

JavaScript has two primary execution contexts: the Global Execution Context (GEC) and the Function Execution Context (FEC).

### Global Execution Context (GEC)

* Created at the beginning of the script.
* Manages global variables and functions.
* Binds the `this` keyword to the global object (usually `window` in browsers).

### Function Execution Context (FEC)

* Created whenever a function is called.
* Manages function-specific variables, arguments, and the local value of `this`.

## Phases of JavaScript Execution:

JavaScript runs a program in two phases:

**1. Memory Creation Phase**

* In GEC, variables and functions are allocated memory space, but their values are initially set to `undefined`.
* In FEC, function parameters and local variables are allocated memory space.

**2. Execution Phase**

* In GEC, global variables are assigned values, and global functions are defined.
* In FEC, function parameters are assigned values, local variables are declared and assigned values, and function code is executed.

## Example Breakdown

Consider the following code snippet:

```javascript
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
```

**1. Global Execution Context (GEC)**

* **Memory Creation Phase:**
    * `val1` and `val2` are allocated memory space with initial values set to `undefined`.
    * `addNum` function is allocated memory space, but its code is not executed yet.
    * `result1` and `result2` are allocated memory space with initial values set to `undefined`.

* **Execution Phase:**
    * `val1` is assigned the value 10.
    * `val2` is assigned the value 5.

**2. Function Execution Context (FEC) for `addNum` (first call)**

* **Memory Creation Phase:**
    * `num1` and `num2` are allocated memory space within the function.
    * `total` is allocated memory space.

* **Execution Phase:**
    * `num1` is assigned the value of `val1` (which is 10).
    * `num2` is assigned the value of `val2` (which is 5).
    * `total` is calculated as 10 + 5 = 15.
    * The value of `total` (15) is returned to the GEC.

**3. Global Execution Context (GEC) (continued)**

* `result1` is assigned the value returned from `addNum` (15).

**4. Function Execution Context (FEC) for `addNum` (second call)**

* Similar steps as in the first call, but with different argument values, resulting in `result2` being assigned the value 12.

**Important Notes**

* Each function call creates a separate FEC, ensuring proper scoping and isolation of function behavior.
* The `this` keyword within a function context typically refers to the object that invoked the function. However, this can be changed using methods like `call()`, `apply()`, or `bind()`.

# CALL STACK 

The call stack is a data structure that operates on the Last-In, First-Out (LIFO) principle. This means that the most recently added item is the first to be removed. In the context of JavaScript, the call stack is used to manage function execution.

## Execution Flow:

1. **Global Execution Context (GEC) Creation:** The script begins by creating the GEC, which is the initial execution context.
2. **Function Definitions:** Within the GEC, the functions `one()`, `two()`, and `three()` are defined.
3. **`one()` Function Call:** `one()` is the first function called.
4. **Call Stack Push:** `one()` is pushed onto the call stack.
5. **`two()` Function Call:** `one()` calls `two()`, which is pushed onto the call stack.
6. **`three()` Function Call:** `two()` calls `three()`, which is pushed onto the call stack.
7. **`three()` Function Completion:** `three()` executes and finishes. It is popped from the call stack.
8. **`two()` Function Resumes:** Control returns to `two()`, which is now at the top of the call stack. `two()` executes and finishes. It is popped from the call stack.
9. **`one()` Function Completion:** Control returns to `one()`, which is now at the top of the call stack. `one()` executes and finishes. It is popped from the call stack.

**LIFO Action:**

As functions are called, they are pushed onto the call stack. When a function finishes execution, it is popped from the call stack. This ensures that the most recently called function is always the first to finish executing.

### Example:

Consider the following code:

```js
function one() {
  console.log("one");
  two();
}

function two() {
  console.log("two");
  three();
}

function three() {
  console.log("three");
}

one();
```

**Execution:**

1. `one()` is called and pushed onto the call stack.
2. `two()` is called and pushed onto the call stack.
3. `three()` is called and pushed onto the call stack.
4. `three()` finishes and is popped from the call stack.
5. `two()` finishes and is popped from the call stack.
6. `one()` finishes and is popped from the call stack.

**Call Stack at Each Step:**

```
Step 1: [one()]
Step 2: [one(), two()]
Step 3: [one(), two(), three()]
Step 4: [one(), two()]
Step 5: [one()]
Step 6: []
```

This demonstrates how the call stack works and manages function execution in JavaScript.
