// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle = turtle.padStart(7);
rabbit = rabbit.padStart(7);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '='); // pads with whatever is provded


// Object.values
// Object.entries
// replace
// Object.keys
let objTest = { // as its not an object map filter and reducer are not available
  username0: 'Santa',
  username1: 'Rudolf',
  username2: 'Mr, Grinch',
}
Object.keys(objTest).forEach((key, index) => {
  console.log(key, objTest[key]);
});

Object.values(objTest).forEach((value) => {
  console.log(value);
});

Object.entries(objTest).forEach((value) => {
  console.log(value);
});

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
// 'my name is Rudolf the raindeer'
Object.entries(obj).map((value) => {
  return value.join(" ");
}).join(" ");