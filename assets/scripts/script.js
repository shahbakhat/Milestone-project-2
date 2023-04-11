/* All the variables used */
const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");
const tipCustom = document.querySelector(".tip-custom");
const resetBtn = document.querySelector(".reset");
const error = document.querySelector(".error");

/*All Values pre-defined*/
billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);
/*
Each tips button added functionality with forEach() method */
tips.forEach(function (val) {
  val.addEventListener("click", handleClick);
});
tipCustom.addEventListener("input", tipInputFun);

/*Bill event listener and function*/
let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;
billInput.addEventListener("input", billInputFun);
function billInputFun() {
  billValue = parseFloat(billInput.value);
  calculateTip();
}
/*Input for people and event listener and error */
peopleInput.addEventListener("input", peopleInputFun);
function peopleInputFun() {
  peopleValue = parseFloat(peopleInput.value);
  if (peopleValue <1){
    error.style.display="flex";
    peopleInput.style.border = "thick solid red";
  }
  else{
    error.style.display="none";
    peopleInput.style.border = "none";
  }
  calculateTip();
}
/*
Custom tip calculation function */
function tipInputFun() {
  tipValue = parseFloat(tipCustom.value / 100);

  tips.forEach(function (val) {
    val.classList.remove("active-tip");
  });
  calculateTip();
}
/*15% button color reset / hover effect*/
function handleClick(event) {
  tips.forEach(function (val) {
    val.classList.remove("active-tip");
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("active-tip");
      tipValue = parseFloat(val.innerHTML) / 100;
    }
    calculateTip();
  });
}
/* over Tip calculation*/
function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue + tipAmount) / peopleValue;
    tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "$" + total.toFixed(2);
  }
}
/*Reset Button*/
resetBtn.addEventListener("click", reset);
function reset() {
  billInput.value = "0.0";
  billInputFun();
  peopleInput.value = "1";
  peopleInputFun();
  tipCustom.value = "";
}