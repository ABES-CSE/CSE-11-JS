function calculateTax(parameter1){
    console.log(parameter1*0.1);
}
calculateTax(1000);

function taxCalculation(cost,taxPercent=0.1){
    console.log(cost*taxPercent);
}

taxCalculation(5000,0.3);
taxCalculation(5300);