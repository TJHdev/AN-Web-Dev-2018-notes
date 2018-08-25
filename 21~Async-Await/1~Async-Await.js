// const urls = [
//   'https://jsonplaceholder.typicode.com/users',
//   'https://jsonplaceholder.typicode.com/posts',
//   'https://jsonplaceholder.typicode.com/albums'
// ]

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(result => console.log(result))

async function fetchUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users') // fetchUsers function will pause until it gets a response from jsonplaceholder
  const data = await resp.json() // resp.json() returns a Promise so we can use the await keyword again.
  console.log(data);
}

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => 
  fetch(url).then(resp => resp.json())
)).then(array => {
  console.log('users', array[0])
  console.log('posts', array[1])
  console.log('albums', array[2])
}).catch('oops')


const urls2 = [
  'https://jsonplaceholde.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls2.map(url =>  // desstructuring the array
      fetch(url).then(resp => resp.json())
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch (err) {
    console.log('oops', err)
  }
}