let text='{"employees":[{firstName:"John,LastName:Doe}], firstName:"Anna"}';
onj=JSON.parse(text);
document.getElementById("demo").innerHTML=obj.employees[1].lastName+""+obj.employees[1].lastName;

for(let value of arr){
    console.log(value);
}
const add = (a,b)=>a+b;