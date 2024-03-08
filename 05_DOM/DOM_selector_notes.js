("................................................          DOM selectors and HTML collection           ............................................");

("Behind the Scenes:")

// Class: In JavaScript, classes are portrayed as `className` behind the scenes.
// React: In React, the `className` attribute is used to assign classes to elements.


("..........................................................................              DOM Manipulation:           ")


("1. Getting Elements by Class:")

// * `document.getElementsByClassName('classname')`: Returns a collection of elements with the specified class

// ("2. Accessing Class Attributes:")

// * `element.className`: Gets the class attribute value of an element.
// * `element.getAttribute('class')`: Same as `element.className`.

// ("3. Setting Class Attributes:")

// * `element.setAttribute('class', 'new-classname')`: Adds or replaces the class attribute with the specified value.

// ("4. Manipulating Styles Using Class Attributes:")

// * Access the element using its ID or class name.
// * Use `element.style` to access and manipulate the CSS styles.


("Example:");

""      // Get element by ID
        const title = document.getElementById('title');

        // Set class attribute
        title.setAttribute('class', 'test heading');

        // Manipulate styles
        title.style.backgroundColor = 'green';
        title.style.borderRadius = '13px';
        title.style.padding = '15px';
""

("Note:")

// * Setting `className` overrides existing classes. To add multiple classes, separate them with spaces.
// * Using `getAttribute` instead of `element.attribute` returns a string value and not an attribute object.

0
("DOM Element Properties")

// | Property       -     Description                                            |

// | `textContent`  -     The text content of the element, excluding text from child of selected element. |
// | `innerText`    -     The text content of the element, including text from child of selected elemnt. |
// | `innerHTML`    -     The RAW HTML content of the element, including tags and attributes. [As it is written] |



("........................................................................            CSS selectors:      ");


("querySelector()")
// The `querySelector()` method returns the first element that matches the specified CSS selector.
// returns 'null' if no element matches the specified CSS selector.

("Example:")

""
        const myUl = document.querySelector('ul');
        myUl.style.color = 'yellow';
""

("Syntax:")-

""
        querySelector('A CSS selector');
""

("Cautions:")

// * Avoid using `querySelector()` on variables that are not defined.
""
        myUl.querySelector('li').style.color = 'green';
""
// * Use `const` to declare variables that should not be reassigned.




("...................................................................           Nodelist and HTML Collection    -       'querySelectorAll()'        ")

// What is a NodeList?
        // A NodeList is a collection of nodes that is returned by certain methods in the DOM API, such as document.querySelectorAll().

// What is an HTMLCollection?
        // An HTMLCollection is a collection of elements that is returned by certain methods in the DOM API, such as document.getElementsByTagName()


("Example: Nodelist")

// const multi = document.querySelectorAll('li'): Selects all <li> elements as a nodelist.

// Differences from Arrays:
//     * multi.style.color = 'green': Cannot set properties directly on a nodelist.
//     * multi[0].style.color = 'green': Can set properties on individual elements by accessing their index.

("Example: HTML Collection")

// * Similar to nodelists but created using `document.getElementsByTagName()`.
// * Also not pure arrays.

("Array vs. Nodelist/HTML Collection")

// | Property                   |     Array                     | Nodelist/HTML Collection                          |
// |----------------------------|---------------------------    |---------------------------------------------------|
// | Properties                 |     Settable                  | Read-only                                         |
// | Element Access             |     myArray[0]                | `multi[0]`                                        |
// | Looping                    |     forEach(), forin() etc.   | `forEach()`                                       |
// | Array Methods              |     map(), filter()           | Only some array methods apply (e.g., `forEach()`) |
// | Conversion to Array        |     Not necessary             | Using `Array.from()`.                             |


("querySelectorAll() vs. querySelector()")

// * `querySelectorAll()`: Selects multiple elements and returns a nodelist.
// * `querySelector()`: Selects a single element and returns an element.


("Converting a NodeList/HTML collection to an Array")

// If you need to convert a NodeList to an array, you can use the Array.from() method. 
// The Array.from() method takes a NodeList/HTML collection as an argument and returns an array that contains the same elements as the NodeList.

// Example:
const nodeList = document.querySelectorAll("li");
const array = Array.from(nodeList);

("Conclusion")
// NodeLists and HTMLCollections are not pure arrays. 
// This means that they do not have all of the same properties and methods as arrays. 
// However, you can convert a NodeList to an array using the Array.from() method.


(".........................................................         Practice        ......................................................");
// 1. Wikipedia 
// 2. CodeHelp


















