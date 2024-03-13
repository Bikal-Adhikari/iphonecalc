const displayElm = document.querySelector(".display");

const allBtns = document.querySelectorAll(".btn");
const operators = ["%", "/", "*", "-", "+"];

let lastOperator = "";

const audio = new Audio("./aa.wav");
