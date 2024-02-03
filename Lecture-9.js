
//          ***************************************         REVISION            ***********************************


// Data types : Differentiate on the bases of How they are stored in memory and how they can be accessed.

// Primitive:- They are a copy of actual data in memory -- Call by value

// 7 types: - String, Number, Boolean, Un-defined, null, Symbol(to make a value unique), BigInt(big value).

const score = 100.45

const isloggedin =  false
const outsideTemp = null

//                              *************        Example         ************

// Symbol (Mostly used in react[library])   {UNIQUE VALUE}
const id = Symbol("124")
const anotherId = Symbol("124")
// Even if the value is same, the result of id and address will be different. 
console.log(id === anotherId);

// BigInt - use of n at last
const big = 5456512321516516513215654523121651651n
console.log(typeof big);

// Is JacaScript a dynamically typed language or static language?
// If data type(safety) needs to be specified then it is static otherwise dynamic language.


// Non-Primitive (Reference type) :- Call by Reference

// Array, Object, Functions

const array = ["amit", "rahul", "anjali"]

let object = {    // all inside the curly braces is Object
    // key:value pair 
    
    name: "amit",
    age: 20,
    family: "gusai",
}

const myFunction = function(){
    console.log("This is a function");
}

// data type of non-primitive are all object (typeof _)
// data type of function is called Function Object.

console.log(typeof myFunction);

// To Master JacaScript :- master objects and  master browser Events. 

