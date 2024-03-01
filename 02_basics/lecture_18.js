"..................................         Object De-Structure  and JSON       ................................................";

const login = {
  username: "amitgusai",
  password: 14848,
  course_instructor: "Hitesh Choudhary",
};

console.log(login.username);
// De_Structure:
const { course_instructor: Instructor } = login;
console.log(Instructor);

// Concept used in React as: De-Structuring in React
// const navbar = ({company}) => {

// }

// navbar(company = "qualcomm")

"......................     JSON    ......................"
// JSON
// API values from BackEnd in JSON format

// 1. Object form
{
  "name": "amit",
  "course_name": "javascript",
  "price": "im-measurable"
}

// 2. Array form
[
  {},
  {},
  {}
]

"..................   JSON Formatter  ................."

// A JSON formatter is a tool that makes JSON data easier to read and understand.

// Raw data: 
{"name":"John","age":30,"cars":["Ford","BMW","Fiat"]}

// Formatted JSON data:
{
  "name": "John",
  "age": 30,
  "cars": [
      "Ford",
      "BMW",
      "Fiat"
  ]
}
