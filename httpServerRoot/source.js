/* Task 1 - Add a new div element to the div with the id "task1"
   The new div should contain the text "Task 1 Completed"
   You have access to the DOM via the variable "document".
*/
let task1Div = document.getElementById("task1");
let newDiv = document.createElement("div");
newDiv.innerText = "Task 1 Completed";
task1Div.appendChild(newDiv);

/* Task 2 - Greeter
  Add a new input element with id "greeterName" and label text "Name:" to the div with the id "task2".
  Add a new button element with id "doGreet" to the div with the id "task2", next to the input element.
  Add a new div element with id "greetResult" to the div with the id "task2".
  When the button "doGreet" is clicked, the "greetResult" div should contain the text "Hello, "
  followed by the value of the input element "greeterName".
*/
let task2Div = document.getElementById("task2");
let nameLabel = document.createElement("label");
nameLabel.innerText = "Name:";
nameLabel.setAttribute("for", "greeterName");
let nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "greeterName");
let greetButton = document.createElement("button");
greetButton.setAttribute("id", "doGreet");
greetButton.innerText = "Greet";
let greetResultDiv = document.createElement("div");
greetResultDiv.setAttribute("id", "greetResult");
task2Div.appendChild(nameLabel);
task2Div.appendChild(nameInput);
task2Div.appendChild(greetButton);
task2Div.appendChild(greetResultDiv);
greetButton.addEventListener("click", function() {
  let name = document.getElementById("greeterName").value;
  let greeting = "Hello, " + name;
  greetResultDiv.innerText = greeting;
});


/* Task 3 - Highlighter
  Add three new div elements with class "highlight" to the div with the id "task3".
  The background color of the divs should be white.
  Each div should contain the text "Click to highlight me".
  When a div with the class "highlight" is clicked, it should change its background color to yellow using inline css style.
  When a div with the class "highlight" is clicked again, it should change its background color to white.
*/// Get the div with id "task3"
let task3Div = document.getElementById("task3");

// Create three new div elements with class "highlight"
for (let i = 1; i <= 3; i++) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "highlight");
  newDiv.setAttribute("style", "background-color: white;");
  newDiv.innerText = "Click to highlight me";
  task3Div.appendChild(newDiv);
}

// Add click event listeners to the highlight divs to toggle their background color
let highlightDivs = document.getElementsByClassName("highlight");
for (let i = 0; i < highlightDivs.length; i++) {
  highlightDivs[i].addEventListener("click", function() {
    if (this.style.backgroundColor === "yellow") {
      this.style.backgroundColor = "white";
    } else {
      this.style.backgroundColor = "yellow";
    }
  });
}


/* Task 4 - Sum Calculator
  Add a new input element with id "calcInput1" to the div with the id "task4".
  Add a new input element with id "calcInput2" to the div with the id "task4".
  Add a new button element with id "calcButton" to the div with the id "task4", next to the input elements.
  Add a new div element with id "calcResult" to the div with the id "task4".
  When the button "calcButton" is clicked, the "calcResult" div should contain the result of the calculation
  of the two input elements "calcInput1" and "calcInput2" summed together.
*/
// Get the div with id "task4"
let task4Div = document.getElementById("task4");

// Create the two input elements and the button element
let calcInput1 = document.createElement("input");
calcInput1.setAttribute("id", "calcInput1");
calcInput1.setAttribute("type", "number");
let calcInput2 = document.createElement("input");
calcInput2.setAttribute("id", "calcInput2");
calcInput2.setAttribute("type", "number");
let calcButton = document.createElement("button");
calcButton.setAttribute("id", "calcButton");
calcButton.innerText = "Calculate";

// Create the result div element
let calcResult = document.createElement("div");
calcResult.setAttribute("id", "calcResult");

// Append the input elements and button element to the task4Div
task4Div.appendChild(calcInput1);
task4Div.appendChild(calcInput2);
task4Div.appendChild(calcButton);
task4Div.appendChild(calcResult);

// Add a click event listener to the calcButton to calculate the sum of the input values and display it in the calcResult div
calcButton.addEventListener("click", function() {
  let num1 = parseFloat(document.getElementById("calcInput1").value);
  let num2 = parseFloat(document.getElementById("calcInput2").value);
  let sum = num1 + num2;
  document.getElementById("calcResult").innerText = "Sum: " + sum;
});

 
/* Task 5 - Hide and Show
  Add a new button element with id "hideButton" to the div with the id "task5".
  Add a new button element with id "showButton" to the div with the id "task5".
  Add a new div element with id "hideShowResult" to the div with the id "task5".
  The "hideShowResult" div should be 100px by 100px and have a background color of red and be hidden by default (display: none).
  When the button "hideButton" is clicked, the "hideShowResult" div should be hidden.
  When the button "showButton" is clicked, the "hideShowResult" div should be shown.
*/
// Get the div with id "task5"
let task5Div = document.getElementById("task5");

// Create the hide and show button elements
let hideButton = document.createElement("button");
hideButton.setAttribute("id", "hideButton");
hideButton.innerText = "Hide";
let showButton = document.createElement("button");
showButton.setAttribute("id", "showButton");
showButton.innerText = "Show";

// Create the hideShowResult div element
let hideShowResult = document.createElement("div");
hideShowResult.setAttribute("id", "hideShowResult");
hideShowResult.style.width = "100px";
hideShowResult.style.height = "100px";
hideShowResult.style.backgroundColor = "red";
hideShowResult.style.display = "none";

// Append the buttons and hideShowResult div to the task5Div
task5Div.appendChild(hideButton);
task5Div.appendChild(showButton);
task5Div.appendChild(hideShowResult);

// Add click event listeners to the hide and show buttons to hide and show the hideShowResult div
hideButton.addEventListener("click", function() {
  hideShowResult.style.display = "none";
});

showButton.addEventListener("click", function() {
  hideShowResult.style.display = "block";
});

