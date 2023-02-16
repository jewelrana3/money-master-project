document.getElementById('calculate').addEventListener('click', function () {
    // income input 
    const incomeInput = document.getElementById('income-input');
    const incomeInputSting = incomeInput.value;
    const incomeValue = parseFloat(incomeInputSting)

    // food input
    const foodInput = document.getElementById('food');
    const foodInputSting = foodInput.value;
    const foodValue = parseFloat(foodInputSting);
    // console.log(foodValue);

    //    rent input 
    const rentInput = document.getElementById('rent');
    const rentInputSting = rentInput.value;
    const rentValue = parseFloat(rentInputSting);

    // utilities input
    const utilitiesInput = document.getElementById('Utilities');
    const utilitiesInputSting = utilitiesInput.value;
    const utilitiesValue = parseFloat(utilitiesInputSting);

    const newNumber = foodValue + rentValue + utilitiesValue;
    console.log(newNumber)

    // add 3 input 
    const firstElement = document.getElementById('first-number');
    const firstInputSting = firstElement.innerText;
    const firstInputValue = parseFloat(firstInputSting);
    // console.log(firstInputValue);

    const totalAmount = firstInputValue + newNumber;
    firstElement.innerText = totalAmount;

    const secondElement = document.getElementById('second-number');
    const secondElementSting = secondElement.innerText;
    const secondElementValue = parseFloat(secondElementSting);
    // console.log(secondElementValue)
     const allTotal = totalAmount - incomeValue;
     secondElement.innerText = allTotal;

});

document.getElementById('input-discount').addEventListener('click',function(){
    const incomeInput = document.getElementById('income-input');
    const incomeInputSting = incomeInput.value;
    const incomeValue = parseFloat(incomeInputSting)

    const discountInput = document.getElementById('save-amount');
    const discountInputSting = discountInput.value;
    const discountInputValue = parseFloat(discountInputSting);
    
    // incomeValue
    const number1 = discountInputValue / 100;
    const number2 = incomeValue - (incomeValue * number1);
    // console.log(number2)
    // .innerText=number2;
    const saveText = document.getElementById('save');
    const saveTextSting = saveText.innerText = number2;

    const remainTotal  = allTotal - number2;
    console.log(remainTotal)
   
})
    

