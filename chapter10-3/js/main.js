

let numbers = [1,2,3,4,5,6,7];
let display = document.getElementById("demo");
function pushToArray(){
     let userInput = document.querySelector("#numberInput");
     if(userInput.value === ""){
     	document.getElementById('warning').innerHTML = "please enter a number and push after"

     } else {
     	numbers.push(document.querySelector("#numberInput").value); //complete the code
     	display.innerHTML = numbers;
     	userInput.value = "";
     }

}

function shiftToArray(event){
	event.preventDefault();
	if(numbers.length != 0){
		numbers.shift();
		display.innerHTML = numbers;
	} else {
		document.getElementById('warning').innerHTML = "How can i shift if the array is empty?";
	}

}

function unshiftToArray(event){
	event.preventDefault();
	let userInput = document.querySelector("#numberInput");
		if(userInput.value === "") {
			document.getElementById('warning').innerHTML"please enter a number and unshift after.";
     } else{ 
     
		numbers.unshift(document.querySelector("#numberInput").value);
		display.innerHTML = numbers;
		userInput.value = "";
	}

}