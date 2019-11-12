console.log("fsdfsd");
let d = new Date(2020, 6, 25, 15, 0, 0);
let x = new Date();


let a= (d-x)/(1000*3600*24);
c = Math.floor(a);

document.getElementById("text").innerHTML=c+" dni.";