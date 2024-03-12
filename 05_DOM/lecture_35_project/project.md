# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code :

# Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// Here, we take an Event and store it in a function.

buttons.forEach(function(button){
  console.log(button);
  // Adding Event Listener
  // This 'event' object in function has many details.
  button.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target);
    switch (event.target.id) {
      case 'grey': body.style.backgroundColor = 'grey'; 
      break;

      case 'white': body.style.backgroundColor = 'white'; 
      break;

      case 'blue': body.style.backgroundColor = event.target.id; 
      break;

      case 'yellow': body.style.backgroundColor = 'yellow'; 
      break;

      default: body.style.backgroundColor = 'black';
    };
  });
});
```           































