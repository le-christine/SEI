import "core-js/stable";

// Define a `Promise` that, when it resolves successfully, will log 'Success!', and that, when it fails, will emit a `console.error` message of 'Failure!'

const p = Promise.resolve(() => console.log('Success!')).reject(() => console.log('Failure!'))

// Write a `fetch` call targeting `http://worldtimeapi.org/api/ip` that logs the object that is returned

fetch('http://worldtimeapi.org/api/ip')
  .then(res => res.json())
  .then(data => console.log(data));
