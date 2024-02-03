let value = 8
let newvalue = -value
// console.log(newvalue)

// Basic Operations: - +, -, <, >, *, / etc.

// console.log(3+4) 
// console.log(3-4) 
// console.log(3*4) 
// console.log(3/4) 
// console.log(3%4)  // modulo (remainder)

let str_1 = "amit"
let str_2 = " gusai"

let str_3 = str_1 + str_2
// console.log(str_3);

//                                            ********************* TRICKY OPERATIONS - NOT PREFERRED [READABILITY] *******************

// console.log("1" + 3);        // if string is 1st placed, then all will be treated as 'Stirng'.
// console.log(1 + "2");
// console.log("3" + 8 + 5)
// console.log(3 + 3 + "9");    // if string is last placed, then 1st calculation take place.

// console.log(true);
// console.log(+true);          // the '+' sign will print the value in number.
// console.log(+null);

//                                                           *********************   END  ***********************

let amount = 200
salary = amount++ // post increment - 1st use and then increment

let money = 200
finance = ++money // pre increment - 1st increment and then use

console.log(salary)
console.log(finance)


