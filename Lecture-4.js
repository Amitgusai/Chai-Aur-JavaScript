// Used to declare a Variable which will be UN-changeable
const Account_Id = 221022126461
// Scope is not defined in this 'var' case
var Account_city = "Almora" 
// Scope is well-defined in case of 'let' keyword
let Account_name = "Amit Gusai"
// Not a good practice without using 'let' or 'const' keyword
Account_state = "Uttarakhand" 

// It will show undefined as it not a defined variable 
// Yet hasn't assinged any Value to the Variable
let Account_pin 

// To print 
console.log(Account_Id);
// To print multiple variable simultaneously , more Readability
console.table([Account_Id, Account_city, Account_name, Account_state, Account_pin])


