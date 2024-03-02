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

("For InterView: Scope in windows through Browser and in code enviroment through node are both Different");
