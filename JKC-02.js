//Primitive Types:-
let num=10;
console.log(num);
console.log(typeof num);
num=false;
console.log(num);
console.log(typeof num);
num='hello';
console.log(typeof num);
num=null;
console.log(num);
num=undefined;
console.log(num);

//Reference(Object) Types:-
//Function:
let sayHello=function(){
    alert(`Hello`);
}
sayHello();

//Array:
let numArray=[1,2,3];

// Object (Key Value Pair):
let person={
    name:'Barack Hussein Obama II',
    age:'51',
    title:'44th President of the United States'
}
console.log(name);

//Symbol Type:-
const sym1=symbol(4);
console.log(sym1);
const sym2=symbol(4);
console.log(sym2);
if(sym1==sym2){
    console.log('true');
}else{
    console.log('false');
}



