# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code :

# Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// Here, we take an Event and store it in a function.

// Using forEach as buttons is in form NodeList
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

# Project 2

```JavaScript
const form = document.querySelector('form');

// This usecase will give you empty value because we need get value at the time of event('submit')
// const height = Number(document.querySelector('#height').value);


form.addEventListener('submit', (event)=>{
  // To prevente the default behavior of the form, which is to submit the form to a server. 
  // If not, then display will only show for 1 second, as the page is being reloaded after the form is submitted.
  event.preventDefault();

  // whenever the event comes in form, then we have select inside form (not outside) 
  const height = parseInt(document.querySelector('#height').value);

  // We have to convert to integer as the 'value' gives value in string form.
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  //  Some checks: 
  if(height === '' || height < 0 || isNaN(height)){         // Old method: height == NaN, prefer using 'isNaN' method
    results.innerHTML = `Please give a valid height, ${height}`;
  }

  else if (weight === '' || weight < 0 || isNaN(weight)){         // Old method: height == NaN, prefer using 'isNaN' method
    results.innerHTML = `Please give a valid weight, ${weight}`;
  }
  
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    // results.innerHTML =  `<span>${bmi}</span>`;
    results.append(bmi);
  }
});
```































