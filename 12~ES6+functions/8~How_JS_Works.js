const a = 1;
const b = 10;
const c = 100;

// global variables are bad because if we dont forget to clean up after our selves the memory heap grows
// this can cause the browser to crash due to a 'memory leak'

// callstack
console.log('1');
console.log('2');
console.log('3');

console.log('1');
setTimeout(() => {
  console.log('2');
}, 2000);
console.log('3');


const one = () => {
  const two = () => {
    console.log('4');
  }
  two();
}

// Recursion - function that calls it self.
function foo() {
  foo();
}
foo();

// Call stack
// Web api
// Callback queue
// Event loop


// JS is a single threaded language that can be non-blocking
// it has one callstack and it does one thing at a time.

// In order to not block the single thread it can be A-syncronous
// through use of callback functions.

// Callback functions get pushed onto the callstack through
// the callback queue and then event loop