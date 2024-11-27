let input = "0";
let operator = null;
let previousValue = null;

const display = document.getElementById("display");

const updateDisplay = () => {
  display.innerText = input;
};

const handleNumberClick = (value) => {
  if (input === "0" && value === "0") return; // Prevent multiple leading zeros
  if (input === "0") {
    input = value;
  } else {
    input += value;
  }
  updateDisplay();
};

const handleOperatorClick = (value) => {
  if (operator && previousValue !== null) {
    const result = calculate(previousValue, input, operator);
    input = String(result);
  }
  previousValue = input;
  operator = value;
  input = "0";
  updateDisplay();
};

const handleDecimalClick = () => {
  if (!input.includes(".")) {
    input += ".";
    updateDisplay();
  }
};

const handleClear = () => {
  input = "0";
  operator = null;
  previousValue = null;
  updateDisplay();
};

const handleEquals = () => {
  if (operator && previousValue !== null) {
    const result = calculate(previousValue, input, operator);
    input = String(result);
    operator = null;
    previousValue = null;
    updateDisplay();
  }
};

const calculate = (prev, curr, op) => {
  const prevNum = parseFloat(prev);
  const currNum = parseFloat(curr);
  switch (op) {
    case "+":
      return (prevNum + currNum).toFixed(4);
    case "-":
      return (prevNum - currNum).toFixed(4);
    case "*":
      return (prevNum * currNum).toFixed(4);
    case "/":
      return currNum !== 0 ? (prevNum / currNum).toFixed(4) : "Error";
    default:
      return curr;
  }
};

// Event listeners for buttons
document.getElementById("clear").addEventListener("click", handleClear);
document.getElementById("equals").addEventListener("click", handleEquals);
document
  .getElementById("decimal")
  .addEventListener("click", handleDecimalClick);

const numberButtons = document.querySelectorAll(
  ".buttons button:not(#clear):not(#equals):not(#decimal):not(#add):not(#subtract):not(#multiply):not(#divide)"
);
numberButtons.forEach((button) => {
  button.addEventListener("click", () => handleNumberClick(button.innerText));
});

const operatorButtons = document.querySelectorAll(
  "#add, #subtract, #multiply, #divide"
);
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => handleOperatorClick(button.innerText));
});
