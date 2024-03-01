"..................................         Object De-Structure  and JSON       ................................................";

// Concept used in React

const login = {
  username: "amitgusai",
  password: 14848,
  course_instructor: "Hitesh Choudhary",
};

console.log(login.username);
// De_Structure:
const { course_instructor: Instructor } = login;
console.log(Instructor);

