// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
function NewsAccount(username, timeline) {
  this.username = username;
  this.password = timeline;
}

var tomAccount = new NewsAccount('Tom', 'timeline1');
var daveAccount = new NewsAccount('Dave', 'timeline2');
var mikeAccount = new NewsAccount('Mike', 'timeline3');


function Account(username, timeline) {
  this.username = username;
  this.password = timeline;
}

var objectOne = new Account('Tom', 'abc123');
var objectTwo = new Account('Dave', '123abc');
var objectThree = new Account('Mike', '321abc');

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [objectOne, objectTwo, objectThree];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsFeed = [tomAccount, daveAccount, mikeAccount];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(user, pass) {
  var isValid = false;
  database.forEach(function(account){
    if (user === account.username && pass === account.password) {
      isValid = true;
    }
  });
  return isValid;
}

function signIn(user, pass) { // checks against multiple accounts
  if (isUserValid(user, pass)) {
    console.log(newsFeed);
  } else {
    alert('Sorry, wrong username and password');
  }
};

// function signIn(user, pass) { // checks against one account
//   if(user === database[0].username && pass === database[0].password) {
//     console.log('login complete');
//   } else {
//     console.log('User name and password do not match');
//   }
// }

signIn(userNamePrompt, passwordPrompt);

// 1+3;
// var a = 2;
// return true;

// alert();
// newFunction(param1, param2);

// assign a variable
// var a = true;

// function vs method
// function thisIsAFunction() {

// }

// var myObject = {
//   thisIsAMethod: function () {
    
//   }
// }