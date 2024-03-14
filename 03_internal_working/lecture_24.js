(".................................................         Immediatey Invoked Function Expressions (IIFE)      ..............................................");

// WHY?

// Database Connection: When you create a file that only contains a database connection, 
// you might want the connection to start as soon as the application starts. 
// This is a common practice in web development where a database connection is established at the start of the application 
// and kept open for the duration of the application's lifecycle.


// Scoping and IIFE (Immediately Invoked Function Expression): 
// In JavaScript, variables declared without the var, let, or const keyword are automatically global, even if they are defined inside a function. 
// This can lead to unexpected behavior and bugs, especially in large applications. 
// To avoid this, we can use an IIFE. An IIFE is a function that is immediately invoked and executed as soon as it is defined. 
// Variables defined inside an IIFE are not visible outside its scope, which helps prevent global namespace pollution.

// Named IIEF:
(function chai() {
    console.log("DB Connected");
})();
// We have to use ';' to explicitly end function Otherwise some error
// () : To execute as soon as a function is defined. 

// Arrow Function: IIFE
((name) => {
    console.log(`DB Connected Two ${name}`);
})('hitesh');
// See '()' as a function call 

("InterView Question: ");
// 1. What is IIEF?
// Must mention the Global namaspace Pollution as well;

// 2. Write down a named IIEF. 
// Similar as Regular function declaration;

// 3. Write two IIEF simultaneously?
// Error may occured in using explicit (;).

// 4. Write down a unnamed IIEF.
// Similar as Arrow Function;

// 5. How to pass parameter in IIEF function?
// This is or treat '()' as regular function call and pass arguments through it.
