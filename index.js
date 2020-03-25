// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const intervalId = setInterval(timer1, 1000);
let count = 0;

function timer1() {
  count += 1;
  console.log(count, new Date().toLocaleTimeString());

  if (count === 3) {
    clearInterval(intervalId);
  }
}
