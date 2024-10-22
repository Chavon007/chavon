const display = document.querySelector("#display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  let inputValue = display.value;

  // Replace % with /100 for percentage calculation
  if (inputValue.includes("%")) {
    inputValue = inputValue.replace("%", "/100");
  }

  try {
    display.value = eval(inputValue);
  } catch (error) {
    display.value = "Error";
  }
}

function clearOne() {
  display.value = display.value.slice(0, -1);
}
