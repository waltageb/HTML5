let student =["Leonardo", "Raphael", "Donatello", "Michalangelo"];

//document.getElementById("demo").innerHTML = student[2];
document.querySelector("#demo").innerHTML = student[3];

let userDetails =[];
userDetails[0] = prompt("what is your name?");
userDetails[1] = prompt("what is last name?");
userDetails[2] = prompt("how old are you?");
document.getElementById("demo").innerHTML = userDetails[0] + "" +
     userDetails[1] + " " + userDetails[2];
