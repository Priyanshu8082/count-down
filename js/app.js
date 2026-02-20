const endDate="31 Dec 2026 12:00 Am";
document.getElementById("end-date").innerText = endDate;
let inputs = document.querySelectorAll("input");
let clock = () =>{
    let end= new Date(endDate);
    let now= new Date();
    let diff = (end-now)/1000;
    if (diff<0) return;
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value=Math.floor((diff/3600)%24);
    inputs[2].value=Math.floor((diff/60)%60);
    inputs[3].value=Math.floor(diff%60);
}
setInterval(()=>{
    clock();
},1000);


/*
1 days =24hr;
1 hrs=60min;
1 min=60second;
60 min =3600sec;
*/