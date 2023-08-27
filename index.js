let currentInput = "0";
function updateInput() {
  document.getElementById("result").value = currentInput;
}
function appendToResult(value) {
  if (currentInput === "0" || currentInput === "Error") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateInput();
}
function calculateResult() {
  try {
    currentInput = eval(currentInput);
    updateInput();
  } catch (error) {
    currentInput = "Error";
    updateInput();
  }
}
function clearInput() {
  currentInput = "0";
  updateInput();
}
function removeLastCharacter() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === "") {
    currentInput = "0";
  }
  updateInput();
}
