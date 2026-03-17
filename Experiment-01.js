function calculateResult(){
    const n=document.getElementById("subjects").value;
    let total=0;
    let i;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("Enter the subject number"+(i+1)));
        total+=x;

    }
    let avg=total/n;
    let grade;
    if(avg>90){
        grade='A+';
    }else if(avg>75 && avg<90){
        grade='A';
    }else if(avg>60 && avg<75){
        grade='B';
    }else{
        grade='D';
    }

    let r;
    if(avg>40){
        r="Pass";
    }else{
        r="Fail";
    }

    let result=document.getElementById("result").innerHTML="Total marks: "+total+"<br>"+"Average: "+avg+"<br>";

}