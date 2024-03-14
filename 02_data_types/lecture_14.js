".....................................................        Arrays - 1      ................................................."

const arr = [0, 2, 4, 5, 6, 7, "amit", false, true, null];

// Creating Object:
const arr1 = new Array(0, 1, 2, 3, 4, 5, 6);
// Copy of array is shallow copy : same reference is assigned

console.log(arr1);
console.log(arr1[0]);

// Methods in Array:

arr1.push(100);
console.log(arr1);
// The push method adds new elements at the end of an array

arr1.pop();
console.log(arr1);
// the pop method removes elements at the end of an array.

arr1.unshift(9);
console.log(arr1);
// the unshift method adds new elements at the beginning of an array.

arr1.shift();
console.log(arr1);
// the shift method removes elements at the beginning of an array.


const new_arr = arr1.join();
console.log(new_arr);
console.log(typeof new_arr);
// Converting the array to String

console.log(arr1.includes(4));
console.log(arr1.indexOf(3));

(" IMP - Difference between slice and splice ");

// slice:
// doesn't modify the original array

const array = ["amit", 1, 3, 4, 5];
console.log("A", array);
console.log(array.slice(0, 3));

// splice:
// Modifies the original array

// method changes the array by removing or replacing existing elements and/or adding new elements in place using string arguments.
console.log(array.splice(0, 3));
console.log("B", array);

const sp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sp.splice(3, 6, "a", "b", "c"));
// Syntax: 
    // sp.splice(start_index, total_count_to_remove, replacing_characters_in_string);
    
// We can also replace the removed value by taking arguments in " " Strings
console.log("C", sp);
