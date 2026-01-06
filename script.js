const display = document.getElementById('display');
const message = document.getElementById('message');
let firstOperand = null;
let operator = null;
let shouldClearDisplay = true;

const funMessages = [
  "You’re a math wizard! 🧙‍♂️",
  "Boom! Numbers! 💥",
  "Math-tastic! 🌟",
  "Superb! 🤩",
  "Genius work! 🧠",
  "Awesome! 🎉",
];

function appendNumber(number) {
  if (shouldClearDisplay) {
    display.textContent = '';
    shouldClearDisplay = false;
  }
  display.textContent += number;
}

function setOperator(op) {
  if (operator !== null) {
    calculate();
  }
  firstOperand = parseFloat(display.textContent);
  operator = op;
  shouldClearDisplay = true;
}

function clearDisplay() {
  display.textContent = '0';
  firstOperand = null;
  operator = null;
  shouldClearDisplay = true;
  message.textContent = "Let's start over! ✨";
}

function calculate() {
  if (operator === null || shouldClearDisplay) {
    return;
  }

  const secondOperand = parseFloat(display.textContent);

  if (operator === '/' && secondOperand === 0) {
    display.textContent = 'Oops! 😜';
    message.textContent = "Can't divide by zero, silly!";
    shouldClearDisplay = true;
    return;
  }
  
  let result;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
  }

  display.textContent = Math.round(result * 1000) / 1000; // Round to 3 decimal places
  operator = null;
  shouldClearDisplay = true;
  message.textContent = funMessages[Math.floor(Math.random() * funMessages.length)];
}