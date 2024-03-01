".................................      Functions       ..........................";

Definition: function sayName() {
  console.log("A");
  console.log("M");
  console.log("I");
  console.log("T");
  console.log("T");
}

Reference: sayName;
Execution: sayName();

// ADD two number Function:
(".............................         1. ");

function add_sum(num1, num2) {
  // Checking the data type in later part using if_else
  console.log(num1 + num2);
}

const result = add_sum(3, 5);
// Output: undefined as nothing is returned to variable 'result'
console.log("Result: ", result);

("..................................       2.");

function add_sum1(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

const ans = add_sum1(2, 4);
// Variable 'ans' contains the returned value 'sum'
console.log("Result: ", ans);

("....................................      if_else -- UseCase");

function loginUserMessage(username = "amit") {      // Passing a Default Value
Professional_Code:
  if (!username) {
    // Here, username == undefined
    // meaning : Undefined == false and ! == not(true ka false, false ka true)  = [if not false]
    // Code Here
  }

  if (username === undefined) {
    console.log("Please enter a username");
  } 

  else {
    // Backtick similar as f-string
    return `${username} just logged in`;
  }
}

const message = loginUserMessage();
console.log("Message: ", message);
