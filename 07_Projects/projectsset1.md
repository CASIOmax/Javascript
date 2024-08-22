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