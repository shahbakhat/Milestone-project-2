const billInput = document.querySelector('.bill-input')
const peopleInput = document.querySelector('.people-input')
const trpPerPerson = document.getElementById('tip-amount')
const totalPerPerson = document.getElementById('total-amount')
const tips = document.querySelectorAll('.tips')
billInput.addEventListener('input', billInputFun)
peopleInput.addEventListener('input', peopleInputFun)

billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);

tips.forEach(function(val
    ){val.addEventListener('click',handleClick)})


let billValue = 0.0;
let peopleValue = 1;

function billInputFun(){
    billValue = parseFloat(billInput.value)
    console.log(billValue)
}

function peopleInputFun(){
    peopleValue = parseFloat(peopleInput.value)
    calculateTip()
}

function handleClick(event){
    tips.forEach(function(val){
        val.classList.remove('active-tip');
        if (event.target.innerHTML == val.innerHTML){
            val.classList.add('active-tip');
            tipValue = parseFloat(val.innerHTML)/100;
        }
    })
   calculateTip()
}

function calculateTip(){
    if(peopleValue >= 1){
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue * tipAmount) / peopleValue;
        tipPerPerson.innerHTML = '$' +tipAmount.toFixed(2);
        totalPerPerson.innerHTML = '$' +total.toFixed(2);
    }

}