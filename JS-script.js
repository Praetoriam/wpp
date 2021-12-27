
var jackpotnumber = Math.floor(Math.random() * 501);
console.log(`Lucky number is: ${jackpotnumber}`);
function addition() {
    const elmnt1 = document.getElementById('input-number').value;
    const elmnt2 = document.getElementById('input-number-two').value;

    const sum = parseInt(elmnt1) + parseInt(elmnt2);
    let total = document.getElementById('input-number-three').value = sum;
    let result = document.getElementById('input-number-four')
    let nan = Number(undefined);
  
    if (total == jackpotnumber) {
   
        result.value = "YOU WIN!!";
    }
    else if (total != jackpotnumber) {
    
        result.value= "Sorry, you did not win.";
    }
    

    
}
function deletefunction(){
    let x = document.getElementsByClassName('input-text');
    x[0].value="";
    x[1].value="";
    x[2].value="";
    x[3].value="";
}