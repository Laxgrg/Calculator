let displayElement = document.calculatorForm.display;

function clearDisplay() {
  displayElement.value = "";
}

function deleteLastChar() {
  displayElement.value = displayElement.value.slice(0, -1);
}

function addValue(value) {
  displayElement.value += value;
}

function calculate() {
  let input = displayElement.value;
  try {
    displayElement.value = eval(input);
  }
  catch (e) {
    alert("Invalid input");
  }
}