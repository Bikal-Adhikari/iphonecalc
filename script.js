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
};
