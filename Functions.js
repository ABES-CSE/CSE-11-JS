// let summer = function sum(x,y){
//     s=x+y;
//     return s;
// }

// console.log(summer);


// let value=sum(3,4);
// console.log(value);
// let x=10;
// console.log(x);

// //Arrow Function

// let arrowSum = (a,b)=>{
//     console.log(a+b);
// }
// console.log(arrowSum);

function countVowels(str){
    let count=0;
    for(const char of str){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            count++;
        }
    }

    console.log(count);
}
countVowels("engineering");

let arr=[1,2,3,4];
arr.forEach((val)=>{
    console.log(val*val);
})