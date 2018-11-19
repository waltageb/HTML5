let oddNumbers = [];
let counter = 0;
let value = 1;
for (counter = 0; counter < 10; counter+=1){
	oddNumbers[counter] = value;
	value +=2;
}
document.getElementById("here").innerHTML =oddNumbers;