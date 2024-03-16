("...................................................         Array Specific Loops       .............................................");


("......................................................        for_of Loops    ===      .......................................");

("for_of loop in Arrays: ");

// const arr = [1, 3, 4, 5, 6];

// for (const num of arr) {
//     // console.log(num);
// };

// const str = "greeting amit";

// for (const s of str) {
//     if (s == " ") {
//         continue;
//     };
//     // console.log(`Each char is: ${s}`);
// };


("for_of loop in MAPS");

// Maps is an Object (key-value pair) unlike array it allows any data types as keys
// If you need an object-like structure with any data type as keys and maintain insertion order unlike regular Object which might not reflect the order you added them, use the Map object.

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("IN", "India");
// Maps contains Unique Values

console.log(map);

// Convert to Array 
// Array Destructure by []
for (const [key, value] of map) {
    console.log(key, ':-', value);
};
console.log("\n");

("for_of loops in Object:       Failed");

// const obj = {
//     name: "amit",
//     age: 24,
//     section: "B",
//     ID : 9455783
// };

// for (const [key, value] of obj) {
//     console.log(key, ":-", value);
// };
// Output: obj is not iterable


("...................................................      ( for_in Loops )     ===    To iterable Objects, we have different methods        ............................");

("for_in in Objects:");

const obj1 = {
    js: "JavaScript",
    cpp: "C++",
    py: "Python"
};

for (const key in obj1) {
    console.log(`${key} : - ${obj1[key]}`);
};
console.log("\n");

("for_in in Array:");

const arr1 = ["amit", 5, "rahul", "anjali", "TATA", 1, "govind"];

// for (const num in arr1) {
//     console.log(num);
// };
// console.log("\n");


("................................................          INTERVIEW QUESTIONS         : ..................................................");

// for_of loop is designed to iterate over an iterable object ( plain object are not iterable objects by default but map object is iterable object)
// for_in loop is desinged to iterate over the enumerable properties of an object, not over iterable object

// While Map objects are iterable, they are not plain objects with enumerable properties, which is what the for...in loop requires.

// The for...in loop works by iterating over the keys of an object, whereas the for...of loop works by iterating over the values of an iterable object. 
// Since Map objects are iterable and not plain objects, you can use for...of to iterate over them, but not for...in.

// In other words, the for...in loop is used for objects, and the for...of loop is used for iterable objects like Arrays, Strings, Maps, NodeLists, and more.

for (const key in arr1) {
    console.log(arr1[key]);
};


("for_in in Maps:");

for (const key in map) {
    console.log(key);
};
// Output: Empty 
// Map is not iterable 
console.log("\n");

("..........................................................        ( for_each loop )      ===      Mostly Used in Array      .................................................");

const arr2 = ['js', 'ruby', 'cpp', 'java'];


("1. ");
// Regular Function:
arr2.forEach( function (item) {
    console.log(item);
});
// As it is a CallBack function i.e 'no name'
// Automatically this funnction will execute and every-time 'item' will be given as taking it as a parameter.
console.log("\n");



("2. ");
// Arrow Function:
arr2.forEach((item) => {
    console.log(item);
});
console.log("\n");



("3. ");
function printMe(item) {
    console.log(item);   
};

arr2.forEach(printMe);


("Some-More: ");
arr2.forEach((item, index, arr) => {
    console.log(item, index, arr);
});
// item : values ;
// index : keys ;
// arr = Array


("..........................................        Very Important      ==    DATABASE       ...............................................");

const myCoding = [
    {
        languageName: "javascript", 
        file: "js"
    }, 
    {
        languageName: "Java", 
        file: "java"
    }, 
    {
        languageName: "Python", 
        file: "py"
    }, 
];

myCoding.forEach( (object) => {
    console.log(object.languageName);
});
