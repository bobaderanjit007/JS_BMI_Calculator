const btnEl = document.getElementById("btn");
const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const bmiResult = document.getElementById("bmi-result");

const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI(){
    const bmiValue = weightEl.value / ((heightEl.value / 100) * (heightEl.value / 100));
    bmiResult.value = bmiValue.toFixed(4);
    if(bmiValue < 18.5)
    {
        weightConditionEl.innerText = "Under weight";
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9)
    {
        weightConditionEl.innerHTML = "Normal weight";
    }else if(bmiValue >= 25 && bmiValue <= 29.9)
    {
        weightConditionEl.innerHTML = "Over weight";
    }else if(bmiValue >= 30)
    {
        weightConditionEl.innerHTML = "Obesity";
    }

}
btnEl.addEventListener("click", calculateBMI);