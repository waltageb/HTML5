let demo = document.getElementById("demo");

let experince = Number(prompt("How many years of experince you have?"));

// if(experince>= 0 && experince <1){
// 	demo.innerHTML ="you have no experince";
// }else if(experince>= 1 && experince <2){
// 	demo.innerHTML ="you are junior";
// }else if(experince> 2 && experince <3){
// 	demo.innerHTML ="you are intermediate";
// }else if(experince> 3 && experince <4){
// 	demo.innerHTML ="you are advanced";
// }else{
// 	demo.innerHTML ="you are senior";
// }	
 switch (true) {
 	case experince <0:
 		demo.innerHTML = "you have no experice";
 		break;
 		
 	case experince <=1:
 		demo.innerHTML = "you are junior";
 		break;
 		
 	case experince <=2:
 		demo.innerHTML = "you are intermediate";
 		break;
 		
 	case experince <=3:
 		demo.innerHTML = "you are advanced";
 		break;
 		
 	default:
 		demo.innerHTML = "you are senior";
 		break;
 }
