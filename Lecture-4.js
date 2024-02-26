const Account_Id = 221022126461;
// Used to declare a Variable which will be UN-changeable

var Account_city = "Almora";
// Scope is not defined in this 'var' case

let Account_name = "Amit Gusai";
// Scope is well-defined in case of 'let' keyword

Account_state = "Uttarakhand";
// Not a good practice without using 'let' or 'const' keyword

let Account_pin;
// It will show undefined as it not a defined variable
// Yet hasn't assinged any Value to the Variable

console.log(Account_Id);
// To print

console.table([
  Account_Id,
  Account_city,
  Account_name,
  Account_state,
  Account_pin,
]);
// To print multiple variable simultaneously , more Readability
