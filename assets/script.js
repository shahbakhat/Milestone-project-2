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
    console.log(peopleValue)
}

function handleClick(event){
    tips.forEach(function(val){
        val.classList.remove('active-tip');
        if (event.target.innerHTML == val.innerHTML){
            val.classList.add('active-tip');
            tipValue = parseFloat(val.innerHTML)/100;
        }
    })
    console.log(tipValue)
}