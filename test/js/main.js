function writeMyName(name,lastName){

	console.log(`${name} ${lastName}`);

}

writeMyName("david", "reina");
writeMyName("leonid", "repik");
writeMyName("vivek", "chalana");

//document.getElementById("demo").innerHTML = a+b ;
//es6 arrow function	
let add = function (){

    let arg = arguments.length;
    let i;
    let result = 0;
    for (i = 0 ; i < arg; i+=1){
    	result+=arguments[i];

    } 
    return result;	
}


let mul = function (){

	let arg = arguments.length;
	let i;
	let result = 1;
	for (i = 0 ; i < arg; i+=1) {
		result*=arguments[i];
	}
	return result;
}




console.log(add(1,2,3,4,5,6,7,8));

function changeColor(){
	let mylist = document.getElementsByClassName("listItems")
	let i;
	for (i =0; i<mylist.length; i += 1){
		mylist[i].style.color = "red"
		mylist[i].style.liststyle = "none"
	}
}

function hello(){
	let test ="hello"
	alert(test);
}

let counter = 1;

function startCounter(){
	return (counter+1);
}




startCounter()
