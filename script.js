const displayElm = document.querySelector(".display");

const allBtns = document.querySelectorAll(".btn");
const operators = ["%", "/", "*", "-", "+"];

let lastOperator = "";

const audio = new Audio("./aa.wav");

const buttonAction = (value) => {
  if (value === "AC") {
    strToDisplay = "";
    display();
    return;
  }

  if (value === "=" || value === "Enter") {
    const lc = strToDisplay[strToDisplay.length - 1];
    if (operators.includes(lc)) {
      strToDisplay = strToDisplay.slice(0, -1);
    }
    return total();
  }

  if (operators.includes(value)) {
    lastOperator = value;
    const lc = strToDisplay[strToDisplay.length - 1];
    if (operators.includes(lc)) {
      strToDisplay = strToDisplay.slice(0, -1);
    }
  }

  if (value === ".") {
    const lastOperatorIndex = strToDisplay.lastIndexof(lastOperator);
    const lastNumberSet = strToDisplay.slice(lastOperatorIndex);

    if (lastNumberSet.includes(".")) {
      return;
    }
    if (!lastOperator && strToDisplay.includes(".")) {
      return;
    }
  }
  strToDisplay += value;
  display(strToDisplay);
};

//capture the key press event
document.addEventListener("keypress", (e) => {
  const value = e.key;
  if (e.code.includes("Key")) {
    return;
  }

  buttonAction(value);
});
