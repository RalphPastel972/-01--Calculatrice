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
    calculate();
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

function calculate() {
  result = eval(typedExpression);
  console.log(result);
  finalResultWrittenOnScreen.innerHTML = result;
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
