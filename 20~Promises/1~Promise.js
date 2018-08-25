const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Stuff Worked');
  } else {
    reject('Error, it broke');
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Hiiii');
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Dookie');
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3500, 'Is it me you\'re looking for?');
})


promise.then((result) => { console.log(result) });




Promise.all([promise, promise2, promise3, promise4])
  .then(values => {
    console.log(values);
  })  // waits for all promises to resolve before carrying out the next task.

// promise chaining

promise
  .then((result) => result + '!')
  .then((result2) => { 
    return result2 + '?'
  })
  .catch(() => { console.log('error!') })
  .then(result3 => {
    console.log(result3 + '!')
  })

