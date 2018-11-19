function myFunction(event){
          event.preventDefault();
         let userInfo =[];
         let userInfo[0]
         let userInfo[1] = document.getElementById('nameinput').value;
         let userInfo[2]= document.getElementById('lastNameInput').value;
         


         document.getElementById('inputSummary').innerHTML = `Hello ${name} ${lastName}, 
         thank you for filling out and submitting the form. You will receive an email to 
         the provided email: <h4>${emailInput}</h4>`;
         }
