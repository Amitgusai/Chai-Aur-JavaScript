".......................................        Functions - 2       ........................................";

// A situation like creating a shopping cart where we do not know the number of arguments would come:

("Passing_multiple_value_in_function:");

function calculateCartPrice(value1, value2, ...num1){
    // rest operator - '...'
    return num1;
};

console.log(calculateCartPrice(200, 300, 500, 899));
// Output: ?


("Object_in_a_function");

const user = {
    username: "anjali",
    age: 22
};

function object(obj1){
    console.log(`Username is ${obj1.username} and his/her age is ${obj1.age}`)
};

object(user);








