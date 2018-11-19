let selectedDomObj = document.getElementById("actionButton");


// selectedDomObj.onclick = function() {
// 	console.log("yo! you clicked me");
// };

// selectedDomObj.addEventListener('click' , function(){
// 	document.getElementById('textGoesHere').innerHTML = "you clicked me, this time it isTrusted"
// });

selectedDomObj.addEventListener('click', customFunction);
function customFunction(event){
     console.log(event);

	
}
document.getElementsByTagName("html")[0].addEventListner9'click', function(event){
	console.log(event.target);
}
// document.getElementById("textGoeshere").innerHTML = "you clicked me, this time it isTrusted"

// let removeObject = document.getElementById("remove")
// removeObject.removeListener('click', customFunction);
function checkForm(){
    let passwordcheck = document.getElementById("password1").value;
    let passwordConfirmationcheck = document.getElementById("confirmpassword").value;

    if(password !== "" && passwordConfirmationcheck !== ""){
    	
    }
    if(password === passwordConfirmationcheck){
        ("thank you for fill out the form ");
    } else {
        (" your passwords don't match");
    }
}

