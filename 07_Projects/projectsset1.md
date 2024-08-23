# Projects Related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Cde

## Project 1

```JAvascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    if (event.target.id == 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
  });
});
```

## Project 2

```Javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const hieght = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (
    (hieght && weight == '') ||
    (hieght && weight < 0) ||
    (isNaN(hieght) && isNaN(weight))
  ) {
    result.innerHTML = `Please give a valid values of height ${hieght} & weight ${weight}`;
  } else if (hieght == '' || hieght < 0 || isNaN(hieght)) {
    result.innerHTML = `Please give a valid hieght ${hieght}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((hieght * hieght) / 10000)).toFixed(2);
    result.innerHTML = `<span> ${bmi}</span>`;
    result.style.color = 'green';
  }

  const guide = document.querySelector('#weight-guide');
  const bmiw = (weight / ((hieght * hieght) / 10000)).toFixed(2);

  if (bmiw < 18.6) {
    guide.innerHTML = `The weight ${bmiw} is in the underweight category`;
    guide.Style.backgroundColor = 'Red';
    guide.style.color = 'white';
  } else if (bmiw >= 18.6 && weight <= 24.9) {
    guide.innerHTML = `The weight ${bmiw} is in the Normal category`;
    guide.style.backgroundColor = 'green';
    guide.style.color = 'white';
  } else if (bmiw > 24.9) {
    guide.innerHTML = `The weight ${bmiw} is in the overweight category`;
    guide.style.backgroundColor = 'Red';
    guide.style.color = 'white';
  }
});
```
## Project 3

```Javascript
const clock= document.getElementById('clock')

setInterval(function(){
  let date=new Date()
  clock.innerHTML=date.toLocaleTimeString();
},1000)
```

## Project 4

```Javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```

## Project 5

```Javascript
const insert=document.getElementById('insert');
window.addEventListener('keydown', function (e) {
    // if (event.key === 'g') {
    // document.body.style.backgroundColor = 'green';
    // }
    insert.innerHTML=`
    <table>
    <tr>
        <th>key</th>
        <th>keyCode</th>
        <th>code</th>
    </tr>
    <tr>
        <td>${e.key === " "?"Space":e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>`;
});
```

## Project 6

```Javascript
const colorGen=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for (let i = 0; i< 6; i++) {
      color+=hex[Math.floor(Math.random()*16)];         //The math .random operation is like it gives out an array entery to hex and it iterates over the 16 digits it has to create a hex code after 6 iterations
    }
    return color;
}

    const start=document.querySelector('#start')
    const stop=document.querySelector('#stop')
    
    let intervalId;

    //Start
    const startChangingColor=function(){
        if(!intervalId){
            intervalId=setInterval(change,1000)
        }
        function change(){
        document.body.style.backgroundColor=colorGen();
        }
    }

    const stopChangingColor=function(){
        clearInterval(intervalId)
        intervalId=null;

    }

    document.querySelector('#start').addEventListener('click',startChangingColor)  
    document.querySelector('#stop').addEventListener('click',stopChangingColor)
```
