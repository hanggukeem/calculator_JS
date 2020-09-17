"use strict";
let inputNum = document.getElementById("inputNum");
let res = document.getElementById("res");
let numChk = false;

function cal(num) {
  inputNum.value = inputNum.value + num;
}

function calculate() {
  let result = eval(inputNum.value);
  res.innerHTML = result;
}

function reset() {
  inputNum.value = "";
  res.innerHTML = "";
}
