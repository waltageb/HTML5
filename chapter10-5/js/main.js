let numberArray = [6,5,11,7,8,4,19,123,22,3,12,99,1,];


function bubblesort(theArray){



  let i;
  for(i =0; i < theArray.length; i +=1){
	 let k;

	 for(k =0; k < theArray.length-i; k += 1){
		 if(theArray[k] > theArray[k+1]){
			let temp;
			temp = theArray[k];
			theArray[k] = theArray[k+1];
			theArray[k+1] = temp;
		 }
	  }
   } 
  return theArray;

}

console.log(bubbleSort([6,5,4,3,2,1]));
console.log(bubblesor(numberArray));