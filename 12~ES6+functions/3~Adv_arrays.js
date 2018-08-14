// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const newArray = [];
array.forEach((user) => {
  const newUser = {...user};
  newUser.username += "!";
  newArray.push(newUser);
});
console.log("newArray: ", newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const newArrayTwo = array.map((user) => {
  let { username } = user;
  return username + "?";
});
console.log("newArrayTwo: ", newArrayTwo);

//Filter the array to only include users who are on team: red
const filteredArray = array.filter((user) => {
  return user.team === "red";
});
console.log("filteredArray: ", filteredArray);

//Find out the total score of all users using reduce
const total = array.reduce((acc, user) => {
	return acc + user.score
}, 0);
console.log("total: ", total);

// (1), what is the value of i? // Index
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newerArray = arrayNum.map((num, i) => {
	// console.log(num, i);
	// alert(num);
	return num * 2;
})
console.log("newerArray: ", newerArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const nestedArray = array.map((user) => {
  const newUser = {...user};
  newUser.items = newUser.items.map((item) => {
    return item += "!";
  });
  return newUser;
});

console.log("nestedArray: ", nestedArray);