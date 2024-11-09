const number = document.getElementById("number");
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

const romObj = [
  { sym: "M", value: 1000 },
  { sym: "CM", value: 900 },
  { sym: "D", value: 500 },
  { sym: "CD", value: 400 },
  { sym: "C", value: 100 },
  { sym: "XC", value: 90 },
  { sym: "L", value: 50 },
  { sym: "XL", value: 40 },
  { sym: "X", value: 10 },
  { sym: "IX", value: 9 },
  { sym: "V", value: 5 },
  { sym: "IV", value: 4 },
  { sym: "I", value: 1 },
];

convertBtn.addEventListener("click", () => {
  const input = number.value;
  validator(input);
});

const validator = (input) => {
  output.innerText = "";
  const numInput = Number(input);
  if (input === "" || isNaN(numInput)) {
    output.innerText += "Please enter a valid number";
  } else if (numInput < 1) {
    output.innerText += "Please enter a number greater than or equal to 1";
  } else if (numInput >= 4000) {
    output.innerText += "Please enter a number less than or equal to 3999";
  } else {
    convert(numInput);
  }
};

const convert = (input) => {
  let result = "";
  romObj.forEach(({ sym, value }) => {
    while (input >= value) {
      result += sym;
      input -= value;
    }
  });
  output.innerText += result;
};
