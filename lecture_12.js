(".............................................          Numbers             ......................................................");

const score = 138;

const balance = new Number(138.894484);
// 'new' is used to create a new object.

// Manual or Explicitly creating Number wrapper object to allowing using methods
// In JavaScript, the new Number() is a constructor function` wthich is used to create a new Number object.

// Wrapper Objects:
// In JavaScript, primitives (like Number) do not have properties or methods.
// However, JavaScript allows you to work with primitives as if they were objects.
// It does this by creating a temporary number object, allowing you to use its methods, and then discarding the object once the operation is complete.
// This is done automatically, but you can also create a Number object manually with new Number().

console.log(balance);

// Methods used in Number:

console.log(score.toString());
console.log(score.toFixed(2));
// Especially when Creating a E-commerce Website
console.log(balance.toPrecision(2));

const hundreds = 10000000;

console.log(hundreds.toLocaleString("en-IN"));
// Formatting (Representation to INdian number system)

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

("....................................................           Maths   (By default install)  ...............................................");

console.log(Math);

const num1 = 124.39;

console.log(Math.abs(-4));
// negative to positive

console.log(Math.round(num1));
// Mostly used (normal math round-off)
//  Towards the nearest Integer

console.log(Math.floor(num1));
// Towards bottom value

console.log(Math.trunc(num1));
// Towards 0

console.log(Math.ceil(num1));
// Towards top value

console.log(Math.pow(3, 3));
// power of a number

console.log(Math.sqrt(25));
// square root

console.log(Math.min(1, 3, 4, 5, 6, 0));
// Lowest value return

console.log(Math.max(1, 4, 5, 60, 7, 45));
// Highest value return

("..............................................................        IMPORTANT   .....................................................");

console.log(Math.random());
// It gives value from 0 to 1 in decimal

console.log(Math.random() * 10 + 1);

("To use RANGE: IMPORTANT");

const min = 25;
const max = 30;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
// The random decimal is multiplied by the difference between max and min plus 1 to define range and also avoid 0 case:
// This makes max inclusive in the range.

// + min: This shifts the range up to start at min.
// Without the "+1", the maximum value that could be generated would be max - 1 that's why use floor() to keep in range
