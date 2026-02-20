let booleanValue=8;
if(booleanValue){
    console.log(`Cart is Empty`);
}

//0,Null,Undefined,NaN,' ' are falsy values. Except them every other value is a truthy value.

let result= 0? `truthy`: `falsy`;
console.log(result);

//Guard Operator &&

false && console.log(`hello`);
let last= 5 && console.log(`world`);

let currency=`EUR` || `USD`;
console.log(currency);

let country= undefined || 'India';
console.log(country);