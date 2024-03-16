(".................................................         FILTER,  MAP  and   REDUCE          ...................................................");

// ("for...Each loop doesn't return us values");

// const myArray = ["amit", "gusai", "superman", "shaktiman"];

// const values = myArray.forEach( (item) => {
//     console.log(item);
    // ('Return is Not possible in for...Each loop')
//     return item;
// });

// console.log(values);


(".......................................................................          Filter           .....................................................................");

// In JavaScript, when you use the filter function, it creates a new array and does not modify the original array.
// It's used when you want to select a subset of multiple elements from an array.

const num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const values1 = num3.filter( (num) => (num > 4));
// CallBack Function (given condition )
// Implicit return is used as '{}' requires explicit 'return' statment as it means a scope is opened.
console.log(values1);


// ............................................              for...Each  --  push()      
const num5 = [];

num3.forEach( (num) => {
    if (num > 4 ) {
        num5.push(num);
    };
});

console.log(num5);


("............................................................          DATABASE (INPORTANT Example)        ..........................................................");

// In JavaScript, when you use the filter function, it creates a new array and does not modify the original array.
// It's used when you want to select a subset of multiple elements from an array.

const book = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book Four', genre: 'Science', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Fiction', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'History', publish: 1987, edition: 2010},
    { title: 'Book Seven', genre: 'Science', publish: 1986, edition: 1996},
    { title: 'Book Eight', genre: 'Non-Fiction', publish: 1981, edition: 1989},
];

const userBooks = book.filter( (section) => (section.genre === 'History'));
// item is Object 
console.log(userBooks);
const userBooks1 = book.filter( (section) => (section.edition > 2009 && section.genre === 'History'));
console.log(userBooks1);

const userBook2 = book.filter( (section) => { return section.title === 'Book Five'});
console.log(userBook2);


(".........................................................         MAPS        ...................................................");

// In JavaScript, when you use the map function, it creates a new array and does not modify the original array.
// It's used when you want to transform all elements in an array.

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = myNumber.map( (item) => { return item + 10});
console.log(num);

console.log(myNumber === num);      // Check


// Using for...Each loop:       push()
const empty = [];
const num1 = myNumber.forEach((item) => {
    empty.push(item+10);
});
console.log(empty);



("............................................................          Chaining        ............................................");

const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = num2         // Readability
                .map((num) => (num*10))
                .map((num) => (num+1))
                .filter((num) => num >= 40)
// In Chaining Mechanism, the result of the first callback function is passed as an argument to the next callback function in the chain.
console.log(newNum)



("..............................................................         Reduce  (Shopping Cart)         ...............................................");


const numReduce = [1, 2, 3];

// Regular_Function: 
const myTotal = numReduce.reduce( function (accumulator, current_value) {
    // console.log(`accumulator: ${accumulator} and current value: ${current_value}`);          // Understanding
    return accumulator + current_value;
}, 0);
// More Readable 
console.log(myTotal);


// Arrow_Function:
const myTotal1 = numReduce.reduce( (accumulator, current_value) => (accumulator + current_value), 0)
// Smart Work 
console.log(myTotal1)

("Understanding: ");
// In this case, the function being applied takes two arguments: accumulator and current_value. 
// The accumulator is the value that is returned by the previous invocation of the function, or the initial value if supplied (which is 0 in this case). 
// The current_value is the value of the current element being processed in the array.

// The function is simply adding the accumulator and current_value together and returning the result. 
// This means that myTotal will end up being the sum of all the numbers in the numReduce array.


("...............................................................           Shoping Cart            ...............................................................");

const shoppingCart = [
    {
        itemName : "JS course",
        price: 4999
    },
    {
        itemName : "Web Development course",
        price: 19999
    },
    {
        itemName : "Python course",
        price: 999
    },
    {
        itemName : "JS course",
        price: 499
    }
]

const total = shoppingCart.reduce( (accumulator, item) => (accumulator + item.price), 0);
console.log(total);
