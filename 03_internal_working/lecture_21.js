(".........................................................       SCOPE - 1      ...........................................................");

// Global Scope:
var c = 300
let a = 100
{}  - "When comes with object or function: then it is 'SCOPE'"
if (true) {
    // Block Scope:
    let a = 10;
    const b = 20;
    // Problem: No Scope applied in var
    var c = 30;
    console.log("Inner", a)
};

console.log(a);
// console.log(b);
console.log(c);

("For InterView: Scope in Browser Enviroment and node.js environment are both Different");
// In a browser environment, the global scope is the window object. 
// This means that when you declare a variable in the global scope, it becomes a property of the window object. 
// For example, if you declare var x = 10; in the global scope, you can access this variable using window.x

// On the other hand, Node.js follows a module-based architecture. 
// Each file in Node.js is treated as a separate module, and variables or functions declared in one module are not available in other modules unless explicitly exported. 
// This means that the global scope in Node.js is not the global object, but the module's exports object. 
// If you declare var x = 10; in a Node.js module, it will not be accessible via global.x

("Reason: ");
// Code_Portability: 
// If you're writing JavaScript code that needs to run in both a browser and Node.js environment, 
// understanding the differences in global scope can help you avoid bugs and ensure your code works as expected in both environments.

