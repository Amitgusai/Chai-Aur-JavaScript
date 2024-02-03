
//      *************************       Memory Allocation       *************************

// Stack :- Primitive type (we get a copy of original value)

let name = "amit"

let my_name = name
my_name = "rahul"       // Changes are made in a copy of the Original.

console.log(name);
console.log(my_name);



// Heap :- Non-Primitive type (we get a reference/actual of original value)

let user_1 = {
    email: "amit2003@gmail.com",
    upi_id: "amit@4upi"
}

let user_2 = user_1

console.log(user_2);

// Changes: To Access in Object (we use '.')
user_2.email = "raghav123@gamil.com"
user_2.upi_id = "raghav#3upi"

console.log(user_1);