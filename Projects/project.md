# Projects related to DOM

## Project link
[Click HERE](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

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

    let guide;
    if(bmi < 18.6) {
      guide = "Under Weight";
    }
    else if(18.6 <= bmi && bmi < 24.9){
      guide = "Normal Range";
    }
    else if (bmi >= 24.9) {
      guide = "Over Weight";
    }

    // results.append(bmi , guide);
    results.innerHTML = `<span>${bmi}</span> <p>${guide}</p>`;
  };
});
```

# Project 3

```javascript
const clock = document.getElementById('clock');

// A method in javascript which runs in every moment/second and can be controlled by developer
Syntax:
// setInterval(function(){}, 1000)

setInterval(function(){
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```


# Project 4

```javascript
let randomNum = Math.round((Math.random() * 100) + 1);

// Click Event will take place in id = 'subt'D
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const previousGuess = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const range = document.querySelector('.lowOrHi');
const result = document.querySelector('.resultParas');

const p = document.createElement('p');

let previGuess = [];
let numGuess = 11;

// One variable is always there like playGame which allow us to play game. 
let playGame = true;

if(playGame){

  submit.addEventListener('click', function(event){
    event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// Would mostly used in BackEnd Varification 
function validateGuess(guess){
  // Validates whether the value is a number and in range 1-100.
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  }
  else if (guess < 1){
    alert('Please enter a valid number more than 0');
  }
  else if (guess > 100){
    alert('Please enter a valid number less than 101');
  }
  else {
    previGuess.push(guess);
    // Remaining guess = 0, End of Game 
    if (numGuess == 2) {
      displayGuess(guess)
      displayMessage(`GameOver random number was ${randomNum}`)
      endGame();
    } 
    else {
      displayGuess(guess); // To display the array
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  // Checks the guess is lower or higher than random Number and equal to random number.
  if (guess === randomNum) {
    displayMessage('You guessed it right');
    displayGuess(guess);
    endGame()
  }
  else if (guess > randomNum) {
    displayMessage(`Your guess is higher than random number`);
  }
  else {
    displayMessage(`Your guess is lower than random number`);
  }
}

function displayGuess(guess){
  // Values ko clean and Array ko and remaining guess ko Update.
  userInput.value = ''    // Updating the userInput 
  previousGuess.innerHTML += `${guess}, `;        // Interesting way to successive adding in DOM
  numGuess = numGuess - 1;
  remainingGuess.innerHTML = `${numGuess - 1}`;
}

function displayMessage(message){
  // All DOM manipulation here.
  range.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = '';   // Value Clean
  userInput.setAttribute('disabled', '')        // Disabled additional value inserting
  p.setAttribute('class', 'button');           // Creating button class
  p.innerHTML = '<h2 id = "newGame">Start new Game</h2>';
  // console.log(p)
  result.appendChild(p);
  playGame = false;                            // Most IMPORTANT
  newGame();
};

function newGame(){

  const newButton = document.querySelector('#newGame');
  
  newButton.addEventListener('click', function(event){
    // Resetting variables
    randomNum = Math.round((Math.random() * 100) + 1);
    previGuess = []
    numGuess = 11
    previousGuess.innerHTML = '';
    remainingGuess.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled');        // Removing Attributes
    result.removeChild(p)

    playGame = true;
  })

};