let count=0;
while(count<10){
    console.log(`Current Count: ${count}`);
    count++;
}

let age=20;
if(age>18){
    console.log(`You are eligible to vote`);
}else{
    console.log(`You are J Minor`);
}

let grade='A';
console.log(`Entering Switch Cases: `);

switch(grade){
    case 'A': console.log(`Yes`);
    break;
    case 'B': console.log(`No`);
    break;
    case 'C': console.log(`Yes Not`);
    break;
    default: console.log(`Say Whatever You Want`);
}

let junior=90;
function fname(junior){
    if(junior<100 && junior> 90){
        console.log(`Found`);
    }else{
        console.log(`Not Found`);
    }
}
fname();