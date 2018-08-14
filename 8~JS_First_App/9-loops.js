var todos = [
  "clear room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy"
];

todos.map(function (todo) {
  return todo + "!";
});

// FOR
var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
  todos[i] = todos[i] + "!!";
}

for (var i = 0; i < todosLength; i++) {
  console.log(i);
};

todos.forEach(function(todo, i) {
  console.log(i);
});

function logTodos(todo, i) {
  console.log(i + ": " + todo);
}

todos.forEach(logTodos);


// WHILE     - entry controlled, condition checked first
var counterOne = 0;
while (counterOne < 10) {
  console.log("while: ", counterOne);
  counterOne++;
}

var counterTwo = 10;
while (counterTwo > 0) {
  console.log("while: ", counterTwo);
  counterTwo--;
}

// DO WHILE   - exit controlled, always runs one time
var counterThree = 10;
do {
  console.log("do while: ", counterThree);
  counterThree--;
} while (counterThree > 0);

