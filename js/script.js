let typedExpression = "";
let result;

let formulaWrittenOnScreen = document.querySelector("#displayed_pressed_keys");
let finalResultWrittenOnScreen = document.querySelector("#final_result");

document.addEventListener("click", (event) => {
  console.log(event);
  if (
    event.target.className === "number" ||
    event.target.className === "opérande"
  ) {
    displayFormulaOnScreen(event.target.textContent);
  }

  if (event.target.className === "egal") {
    calculate(5); //hardcoded number of digits in parameter
  }

  if (event.target.id === "delete_last_pressed_key") {
    deleteKeyFeature(event.target.textContent);
  }

  if (event.target.id === "reset_key") {
    resetCalculator();
  }
});

function displayFormulaOnScreen(pressedKey) {
  typedExpression = typedExpression + pressedKey;
  console.log(typedExpression);
  formulaWrittenOnScreen.innerHTML = typedExpression;
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

function deleteKeyFeature(pressedKey) {
  console.log(pressedKey);
  typedExpression = typedExpression.slice(0, typedExpression.length - 1);
  formulaWrittenOnScreen.innerHTML = typedExpression;
}

function resetCalculator() {
  typedExpression = "";
  formulaWrittenOnScreen.innerHTML = "0";
  result = 0;
  finalResultWrittenOnScreen.innerHTML = "";
}
