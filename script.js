//DOM elements
const passwordEl = document.getElementById('password');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
//const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

//generate event listener
passwordEl.addEventListener('click', () => {});

//const hasLower = lowercaseEl.value;
//const hasUpper = uppercaseEl.value;
//const hasNumber = numbersEl.value;
//const hasSymbol = symbolsEl.value;


//passwordEl.innerText = generatedPassword (hasLower, hasUpper, hasNumber, hasSymbol); 



//generate password function

let generatedPassword = "password";
//generatedPassword (hasLower,hasUpper,hasNumber,hasSymbol);
 
  






// Generator Functions - http://www.net-comber.com/charset.html

function getRandomLower() { 
  const lower = "abcdefghijklmnopqrstuvwxyz";
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() { 
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  const number = "0123456789";
  
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*:;?/\<>";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());
console.log(getRandomNumber());
console.log(getRandomUpper());
console.log(getRandomLower());