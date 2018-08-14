let _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));
var css =document.querySelector("h3");
var colorPickerOne = document.querySelector('.color1')
var colorPickerTwo = document.querySelector('.color2');
var randomiseButton = document.querySelector('.random-color');
var body = document.getElementById("gradient");

function updateBackgroundColor () {
  body.style.background = (`linear-gradient(to right, ${colorPickerOne.value}, ${colorPickerTwo.value})`);
  css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomiseColors () {
  colorPickerOne.value = getRandomColor();
  colorPickerTwo.value = getRandomColor();
  updateBackgroundColor();
}


updateBackgroundColor();

colorPickerOne.addEventListener('input', updateBackgroundColor);
colorPickerTwo.addEventListener('input', updateBackgroundColor);
randomiseButton.addEventListener('click', randomiseColors);

