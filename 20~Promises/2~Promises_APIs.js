const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map((url) => {
  return fetch(url).then((response) => {
    return response.json();
  })
})).then((results) => {
  results.forEach((result) => {
    console.log(result);
  })
}).catch(() => console.log('error!'));