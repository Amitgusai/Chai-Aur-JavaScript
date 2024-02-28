"......................................................         DATE and TIME       ....................................................";

// Date is a Object respresenting a single moment in time from 1 january, 1970 in Platform Independent format and milli-seconds from that day.

let my_date = new Date();
console.log(my_date);
// Similar to : toISOString() method

console.log(typeof my_date);

("   ...........................     Methods - 'to' and 'get'    ......................");

("   'to' method     ");

console.log(my_date.toString());
// In string representation

console.log(my_date.toDateString());
// To get date only

console.log(my_date.toTimeString());
// To get time only

console.log(my_date.toLocaleString());
// Used for a more readable representation

console.log(my_date.toLocaleDateString());
// Readable Date Representation

console.log(my_date.toLocaleTimeString());
// Readable Time Representation

console.log(my_date.toISOString());
// Same as Default Representation

("     'get' methods     ");

console.log(my_date.getTime());
console.log(my_date.getDate());
console.log(my_date.getHours());
console.log(my_date.getFullYear());
console.log(my_date.getDay());
console.log(my_date.getSeconds());
// Common Usage of getSeconds()
console.log(my_date.getMonth() + 1);
// As MonthIndex starts from 0

let create_date_1 = new Date(2024, 1, 28);
// In javascript, Month start from '0' :                                                Month Index : start 0

let create_date_2 = new Date(2024, 1, 28, 4, 5, 6);
// for time as well

let create_date_3 = new Date("02-28-2024");

console.log(create_date_1.toLocaleString());

("       .............      Important      ...................");

let time_stamp = Date.now();
// Used in Quiz and Polls(fastest-one) in javacript gives time in milli-seconds
console.log(time_stamp);
// In milli-seconds

("   ..................      InterView Question      .....................  ");

console.log(Date.now());
/* Below line of code is calculating the current timestamp in seconds. */
console.log(Math.round(Date.now() / 1000));
// Using Math.round() to avoid the seconds in decimals

let old_data = new Date();
console.log(
  old_data.toLocaleString("default", {
    weekday: "long",
    month: "long",
  })
);
// specifies which parts of the date to include and how to format them.
