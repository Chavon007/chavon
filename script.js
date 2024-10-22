const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// define function to calculate based on button clicked

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    // if output has '%', replace with '/100' before evaluating

    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    // IFdel button is clicked, remove the last character from the output
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

// Add event listener to buttons, call calculate() on click.

buttons.forEach((button) => {
  // button click listener calls calculate() with dataset value as argument.
  button.addEventListener("click", (e) => calculate(e.target.textContent));
});
