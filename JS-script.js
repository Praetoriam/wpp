
var jackpotnumber = Math.floor(Math.random() * 501);
console.log(`Lucky number is: ${jackpotnumber}`);
function addition() {
    const elmnt1 = document.getElementById('input-number').value;
const elmnt2 = document.getElementById('input-number-two').value;

    const sum = parseInt(elmnt1) + parseInt(elmnt2);
    let total = document.getElementById('input-number-three').value = sum;
   

   
    
    

    if (total === jackpotnumber) {
   
        document.getElementById('input-number-four').value = "You win";
    }
    else if (total != jackpotnumber) {
    
        document.getElementById('input-number-four').value= "Sorry, try again";
    }
        

    
}




    

    
  