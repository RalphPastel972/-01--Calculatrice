let typedExpression = "";
let result;
const operators = ["+", "-", "*", "/"];

let formulaWrittenOnScreen = document.getElementById("displayed_pressed_keys");
let finalResultWrittenOnScreen = document.getElementById("final_result");

document.addEventListener("click", (event) => {
  //   console.log(event);
  if (event.target.className === "number") {
    checkValidityOfPressedDigitKey(event.target.textContent);
  }

  if (event.target.className === "opérande") {
    checkValidityOfPressedOperatorKey(event.target.textContent);
  }

  if (event.target.className === "egal") {
    resultRoundingDecisionMaking(5); //hardcoded number of decimal digits in this parameter
  }

  if (event.target.id === "delete_last_pressed_key") {
    deleteKeyFeature();
  }

  if (event.target.id === "reset_key") {
    resetCalculator();
  }
});

function checkValidityOfPressedDigitKey(pressedKey) {
  if (operators.includes(typedExpression.slice(-1))) {
    typedExpression = typedExpression + " " + pressedKey; // adds a space in the expression before a digit if the previous pressed key was an operator.
  } else {
    typedExpression = typedExpression + pressedKey; // else adds typed digit without the space
  }
  displayFormulaOnScreen();
}

function checkValidityOfPressedOperatorKey(pressedKey) {
  if (operators.includes(typedExpression.slice(-1)) && pressedKey != "-") {
    console.warn("operator key pressed multiple time in a row");
    deleteKeyFeature();
    checkValidityOfPressedOperatorKey(pressedKey);
    // If user types multiple time an operator key, the key is updated with last operator EXCEPT if that operator is "-" (because of negative numbers)
  } else {
    typedExpression = typedExpression + " " + pressedKey; // adds a space in the expression after an operator has been typed
    displayFormulaOnScreen();
  }
}

function displayFormulaOnScreen() {
  formulaWrittenOnScreen.innerHTML = typedExpression;
}

function resultRoundingDecisionMaking(numberOfDecimalDigits) {
  result = eval(typedExpression); // I shouldn't use eval() because of security concern. I didn't find a better way yet
  const decimalStr = (result - Math.floor(result)).toString();
  const decimalLength = decimalStr.length - 1;
  const factor = Math.pow(10, numberOfDecimalDigits);
  let roundedResult = Math.floor(result * factor) / factor;
  if (decimalLength > numberOfDecimalDigits) {
    displayFinalResultOnScreen(roundedResult);
  } else {
    displayFinalResultOnScreen(result);
  }
}

function displayFinalResultOnScreen(finalResultToBeDisplayed) {
    finalResultWrittenOnScreen.innerHTML = finalResultToBeDisplayed;
  }

function deleteKeyFeature() {
  typedExpression = typedExpression.slice(0, - 1);
  displayFormulaOnScreen();
}

function resetCalculator() {
  typedExpression = "";
  formulaWrittenOnScreen.innerHTML = "0";
  result = 0;
  finalResultWrittenOnScreen.innerHTML = "";
}
