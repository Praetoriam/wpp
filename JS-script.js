// Addition function//
var jackpotnumber = Math.floor(Math.random() * 501);
function addition() {
  const elmnt1 = document.getElementById("input-number").value;
  const elmnt2 = document.getElementById("input-number-two").value;
  let result = document.getElementById("input-number-four");
  let total = document.getElementById("input-number-three");
  const sum = parseInt(elmnt1) + parseInt(elmnt2);
  total.value = sum;
  if (total == jackpotnumber) {
    result.value = "YOU WIN!!";
  } else if (total != jackpotnumber) {
    result.value = "Sorry, you did not win.";
  }
}
// This is the restart function. I know, how does it even reloads the page?.//
// It happened when I changed the input element requirements//
// It was intended to be a 'CLEAR' button, but well, it ended up being the restart one//

function deletefunction() {
  let x = document.getElementsByClassName("input-text");
  x[0].value = "";
  x[1].value = "";
  x[2].value = "";
  x[3].value = "";
}

// Fade function //
//JQuery is useful here (lest you wanna write 20 lines for a toggle function)//

$("#hiddenButton").click(function () {
  $("#hiddenDiv").fadeToggle(1000);
  $("#sumButton").fadeToggle(1000);
  $(this).fadeToggle(1000);
});
$("#Liked-Button").click(function () {
  $("#thanks-text").fadeToggle(1000);
});

$("#hint-button").click(function () {
  $("#hint-text").fadeToggle(2000);
}
)

//Haven't mastered it yet tho//

console.log(`Lucky number is: ${jackpotnumber}`);

// Typewriter function, got it from : https://www.youtube.com/watch?v=h_Uv_9OxA2k //

var textArray = ["WELCOME"];
var textPosition = 0;
var speed = 150;

function typewriter() {
  document.querySelector("#Header-two").innerHTML =
    textArray[0].substring(0, textPosition) +
    "<span id='int-span'>\u007c</span>";
  if (textPosition++ != textArray[0].length) setTimeout(typewriter, 150);
}
window.addEventListener("load", typewriter);
