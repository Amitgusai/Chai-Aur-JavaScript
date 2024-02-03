

//          ********    Basic Conversion - SAME Data Types  ********

// console.log(5 < 10);
// console.log(5 > 10);
// console.log(5 <= 10);
// console.log(5 >= 10);
// console.log(5 == 10);
// console.log(5 === 10);


//          *********   DIFFERENT Data types    **************
// console.log("3" < 2);
// console.log("3" > 2);
// Conversion to 'number' happens

//          *********    Confusion [AVOID] *************

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);     // change
// The reason for different output is than an equality check ++ and comparison > < >= <= work differently
// Comparison convert null to a number, treating it as 0.

// '===' - It strictly check whether the comparison is between same data types or not.
console.log("0" === 0);
