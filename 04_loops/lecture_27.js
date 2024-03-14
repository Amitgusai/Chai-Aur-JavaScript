(".............................................         LOOPS       ......................................................");

("FOR Syntax:");

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// };

("Nested LOOPs:");

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer Loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner Loop value: ${j} and outer loop ${i}`);
//         console.log(i + "*" + j + '=' + i*j);
//     };
// };


("Loops in Array:");

let myArray = ["amit", 200, "gusai", 'hitesh'];

for (let i = 0; i <= myArray.length; i++) {
    console.log(myArray.length);
    const element = myArray[i];
    console.log(element);
};
// In JavaScript : No error like Out of Bound but it show 'undefined'


("Break and Continue: ");

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log("Break is Used");
        break;
    }
    console.log(`value of i is ${i}`);
};
// Break: to terminate/END the loop entirely.

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log("Continue is Used");
        continue;
    }
    console.log(`value of i is ${i}`);
};
// Continue: Skips the current iteration and move on to next one.
