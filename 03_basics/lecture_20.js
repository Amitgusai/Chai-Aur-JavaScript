(".......................................        Functions - 2       ........................................");

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
    ages: 22
};

function object(obj1){
    // We have to check type_safety that the value we used in function actually available
    // Professionals: Choose TypeScript to check type_safety is easy in that.
    // In JavaScript: Possible check of type_safety but Lengthy code using if_else or other.
    console.log(`Username is ${obj1.username} and his/her age is ${obj1.age}`)
};

object(user);
object({
    username: "hitesh", 
    age: 45
});


("Array_in_a_Function");

const my_array = [100, 400, 300, 800];

function return_second_value(get_array){
    // Acessing using Parameters: get_array not Array: my_array
    return get_array[1];
};

const ans = return_second_value(my_array);
console.log(`The Arrays second value is ${ans}`)
