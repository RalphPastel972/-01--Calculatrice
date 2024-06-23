let typedExpression = "";
let result;
const operators = ["+", "-", "*", "/"];

let formulaWrittenOnScreen = document.querySelector("#displayed_pressed_keys");
let finalResultWrittenOnScreen = document.querySelector("#final_result");

document.addEventListener("click", (event) => {
//   console.log(event);
  if (event.target.className === "number") {
    displayFormulaOnScreen(event.target.textContent);
  }

  if (event.target.className === "opérande") {
    checkValidityOfPressedKey(event.target.textContent);
  }

  if (event.target.className === "egal") {
    calculate(5); //hardcoded number of digits in parameter
  }

  if (event.target.id === "delete_last_pressed_key") {
    deleteKeyFeature();
  }

  if (event.target.id === "reset_key") {
    resetCalculator();
  }
});

function displayFormulaOnScreen(pressedKey) {
  if (operators.includes(typedExpression.slice(-1))) {
    // adds a space in the expression before a digit if the previous pressed key is an operator.
    typedExpression = typedExpression + " " + pressedKey;
  } else {
    typedExpression = typedExpression + pressedKey;
  }
  formulaWrittenOnScreen.innerHTML = typedExpression;
}

function checkValidityOfPressedKey(pressedKey) {
  if (operators.includes(typedExpression.slice(-1)) && pressedKey != "-") {
    console.log("operator key pressed multiple time in a row");
    deleteKeyFeature();
    checkValidityOfPressedKey(pressedKey);
    // If user types multiple time an operator key, the key is updated with last operator EXCEPT if that operator is "-" (because of negative numbers)
  } else {
    typedExpression = typedExpression + " "; // adds a space in the expression after an operator has been typed
    displayFormulaOnScreen(pressedKey);
  }
}

function calculate(numberOfDecimalDigits) {
  result = eval(typedExpression);
  const decimalStr = (result - Math.floor(result)).toString();
  const decimalLength = decimalStr.length - 1; // exclude the leading '0.'
  if (decimalLength > numberOfDecimalDigits) {
    const factor = Math.pow(10, numberOfDecimalDigits);
    let roundedResult = Math.floor(result * factor) / factor;
    finalResultWrittenOnScreen.innerHTML = roundedResult;
  } else {
    finalResultWrittenOnScreen.innerHTML = result;
  }
}

function deleteKeyFeature() {
  typedExpression = typedExpression.slice(0, typedExpression.length - 1);
  formulaWrittenOnScreen.innerHTML = typedExpression;
}

function resetCalculator() {
  typedExpression = "";
  formulaWrittenOnScreen.innerHTML = "0";
  result = 0;
  finalResultWrittenOnScreen.innerHTML = "";
}
