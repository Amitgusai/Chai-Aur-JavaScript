(".......................................................     This        .................................");

// 'this': Only applicable in Object

const user = {
    username: "amit",
    price: 299,
    // this: Tells us the Current context/values
    welcomeMessage: function() {
        console.log(`Welcome ${this.username} to our website.`);
        // the context/value of Object:
        console.log(this);
    }
 };

user.welcomeMessage();
user.username = "hitesh";
user.welcomeMessage();
// When a function is defined inside an object, it becomes a method of that object. 

console.log(this);
// Output: {} (Empty: as we are in node enviroment because no context in global scope);

// "InterView : " // Browser me Global Object is Windows Object which is the reason we can use Browser Events;

(".....................................................................       Arrow Function     ....................................................................");

function coffee() {
    let username = "amit";
    console.log(this.username);
    // Output: undefined
};

coffee();

const func = function() {
    let username = "hitesh";
    // this: Only applicable in Object
    console.log(this.username);
    // Output: undefined
};

func();

(".............................................................................................................       Arrow Function: ");
const arrow_func = () => {
    let username = "hitesh";
    console.log(this);
};

arrow_func();

("..............................................        Interview Question: What is the difference between Arrow function and Regular Function ?");

// 1. Arrow function can use Implicit return while Regular function can't and only use Explicit return;
// 2. The difference in 'this' in both functions lies in how 'this' is bound in them:
    // In Regular function: 
        // a. this is bound to the object, the method is called on "(method is a function associated with an Object)";
        // b. if it is a standalone function, 'this' is Global object(in non-Strict mode(browser)) and 'this' is undefined(in Strict mode(node Terminal));
    // In Arrow Function:
        // a. they do not have their own 'this'. Instead, they inherit 'this' from the parent scope at time of function declaration known as "lexical Scoping";
        // b. 'this' is not bound to the object or is lexically bound, it's set to the nearest 'this' value (parent scope) in non-arrow function, or the global object if there's no 'this' value property in parent scope.
        // Example: 
            this.name = "amit";

            let object = {
                name: 'John',
                // Arrow function
                sayHello: () => {
                return 'Hello, ' + this.name;
                }
            };
            console.log(object.sayHello()); // Outputs: Hello, amit
            

// Arrow Function Syntax: 
const addOne = (num1, num2) => {
    return num1 + num2;
};

console.log(addOne(4, 5));

("......................................................        Implicit return: NO need to use Return keyword: ");

// Very Important in React: 
const addTwo = (num1, num2) => (num1 + num2);
// Similar as Lambda function in python;
// If {} used : then we must use return;
const obj = (num1, num2) => ({username: "amit"});
// Prefer: Using ();

console.log(addTwo(4, 5));
console.log(obj());

// Example:
// const my_array = [1, 2, 3, 4, 5];
// my_array.forEach(function () {})
// my_array.forEach(() => {})
