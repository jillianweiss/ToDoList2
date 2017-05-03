var form = document.getElementById("form");
var input = document.getElementById("input");
var button = document.getElementById("button");
var list = document.getElementById("incompleteTasks");
var message = document.getElementById("message");
var instructions = document.querySelector("h2");
var array = new Array();
//console.log(array.length);

// window.onload = function() {
// if(array.length < 1){
//   $(instructions).hide();
// }
// }



function addToList(){

  var task = document.createElement("li");
  var inputText = input.value;
  var text = document.createTextNode(inputText);


  if(inputText != ""){

    task.appendChild(text);
    list.appendChild(task);
    array.push(text);

    message.textContent = "You have " + array.length + " task(s) to complete.";

  }

  else{
    window.alert("You cannot add nothing to your to-do list!");
  }

  function removeFromList(){

    array.splice(array.indexOf(inputText), 1);
    list.removeChild(task);

    message.textContent = "You have " + array.length + " task(s) to complete.";
  }

  task.addEventListener('click', removeFromList, false);
}

button.addEventListener('click', addToList, false);
