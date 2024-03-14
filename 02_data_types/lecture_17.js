"...............................................        Object - 2      ...........................................";

// Constructor
const singleton = new Object();
// Singleton

const obj1 = {
  1: "amit",
  2: "gusai",
  3: "singh",
};

const obj2 = {
  4: "sundar",
  5: "singh",
  6: "gusai",
};

console.log(Object.assign({}, obj1, obj2));
// Merging Object

const spread_operator = { ...obj1, ...obj2 };
console.log(spread_operator);
// Spread Operator in Object

// Nesting Objects
const nest_object = {
  fullname: {
    frist_name: "hitesh",
    sur_name: "Choudhary",
  },
  user_id: {
    user_name: {
      age: 23,
      location: 263601,
    },
  },
};

// Accessing Nested Objects:
console.log(nest_object.fullname?.frist_name);
// ? - works as a if exist then proceed
console.log(nest_object.user_id.user_name.location);

("............................            IMPORTANT - (VALUES FROM DATABASE comes in ARRAY form)           ..............................");

const array_object = [
  {
    name: "amit",
    age: 34,
  },
  {
    user: "data",
    isLoggedin: false,
  },
];

console.log(array_object[0].name);

("........................................       IMPORTANT - Object to Array    ....................................");

const tech_object = {
  name: "rahul",
  married: "yes",
  age: 35,
};

// We can apply Loops by: 

console.log(Object.keys(tech_object));
// key arrays data type
console.log(Object.values(tech_object));
// value arrays
console.log(Object.entries(tech_object));
// key:value pair Arrays

console.log(tech_object.hasOwnProperty("name"));
// Many of the times we have to loop throught a whole Object and accessing value during which
// many time the values does not even exist so we use: hasOwnProperty()
// Checking the property
