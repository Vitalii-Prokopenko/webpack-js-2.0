console.log('Hello world!');
console.log('Hello everybody!');

// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Hello world! Hello everybody!'

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading)