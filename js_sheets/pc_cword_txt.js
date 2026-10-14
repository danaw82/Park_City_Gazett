"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Dana Wildy
   Date: 10/28/2026  
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/

// This will run the init() function when the page is loaded
window.onload = init;

// Global variable declaration

var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection = "right";
var userKey ="";
var typeImage = document.getElementById("directionImg");
 
function init() {

   // Set allLetters to reference all elements using a selector tab

   allLetters = document.querySelectorAll("table#crossword span");
  // console.log("1. Checked elements:", allLetters); // <-- Check #1: Did it find the spans?
document.getElementById("showErrors").addEventListener("click", showErrors);

document.getElementById("showSolution").addEventListener("click", showSolution);

function showErrors() {
   console.log("Show Errors clicked"); 

for(var i = 0; i < allLetters.length; i++) {

var letter = allLetters[i];
  var answer = letter.dataset.letter.toUpperCase();
      var entered = letter.textContent.trim().toUpperCase();

      // Ignore blank cells; highlight only incorrect answers.
      if (entered !== "" && entered !== answer) {
         letter.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
      }
   } // end of loop

      setTimeout (
   function() {
      /*After a 3 second interval set color style for items in all letters
      to empty text string */
  for ( var i = 0; i < allLetters.length; i++) {
   allLetters [i].textContent= "";
   }
   },3000);
}
 // end of show errors

 function showSolution() {
   for(var i = 0; i < allLetters.length; i++) {

    var letter = allLetters[i];  
letter.textContent= letter.dataset.letter;
   }
}


 typeImage.addEventListener("click",switchTypeDirection);

// set current letter to the first object in allLetters index
currentLetter = allLetters[0];

// Set across clue and down clue to dataset values
acrossClue = currentLetter.dataset.clueA;
downClue = currentLetter.dataset.clueD;
function switchTypeDirection () {
  
   if(typeDirection === "right") {
      typeDirection = "down";
       typeImage.src = "images/pc_right.png";
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
} else {
   typeDirection = "right";
   typeImage.src = "images/pc_down.png";
   currentLetter.style.backgroundColor =" rgb(191, 191, 255)";
}
} // close switch type direction here


function formatPuzzle(puzzleLetter) {

   // check in the case if puzzleLetter is non-existent
/*  var puzzleLetter = null;

if (!puzzleLetter) {
    return;
}*/
    currentLetter = puzzleLetter;

 // Loops through allLetters collection changes background to empty text
    for (var i = 0; i < allLetters.length; i++) {
        allLetters[i].style.backgroundColor = "";
    }
// Removes highlighting by changing across and down clues to empty strings
  
 acrossClue = currentLetter.dataset.clueA || "";
 currentLetter.style.backgroundColor = "rgb(200, 200, 255)";


 downClue = currentLetter.dataset.clueD || "";
 currentLetter.style.backgroundColor = "rgb(173, 16, 16)";


if(puzzleLetter.dataset.clueA !== undefined) {
   acrossClue = puzzleLetter.dataset.clueA;
} else {
   acrossClue = "";
}
if(puzzleLetter.dataset.clueD !== undefined) {
   downClue = puzzleLetter.dataset.clueD;
} else {
   downClue = "";
 
}

wordLetters = document.querySelectorAll(
   'table#crossword span[data-clue-a="' + currentLetter.dataset.clueA + '"]'
);

for (var i = 0; i < wordLetters.length; i++) {
   wordLetters[i].style.backgroundColor = "rgb(231, 231, 255)";
}
wordLetters = document.querySelectorAll(
   'table#crossword span[data-clue-d="' + currentLetter.dataset.clueD + '"]'
);

for (var i = 0; i < wordLetters.length; i++) {
   wordLetters[i].style.backgroundColor  ="rgb(255, 231, 231)";
}
if (typeDirection === "right") {
   currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
}else {
   currentLetter.style.backgroundColor = " rgb(255, 191, 191)";
}

}

//  Loop through all letters, and change cursor type
for (var i = 0; i < allLetters.length; i++) {
    var letter = allLetters[i];


  /* Add mouse down event handler, anon function
Calling format puzzle with event obj as parameter */
 
   letter.style.cursor = "pointer";
   letter.addEventListener("mousedown",function (event)
   { formatPuzzle(event.currentTarget);
  });
}
function selectLetter(event) {

   // Set across clue and down clue to dataset values
   var leftLetter = currentLetter.dataset.left;
   var upLetter = currentLetter.dataset.up;
   var rightLetter = currentLetter.dataset.right;
   var downLetter = currentLetter.dataset.down;
   var nextLetter;

      console.log("Test: Something was pressed");
      userKey = event.key;

// Comparison of user keys pressed

// Reference the actual button names not the values

if(userKey === "ArrowLeft") {
 nextLetter = document.getElementById(leftLetter);
console.log("Captured key string:", userKey);
} else if(userKey === "ArrowUp") {
   nextLetter = document.getElementById(upLetter);
   console.log("Captured key string:", userKey);
   }
 else if(userKey === "ArrowRight" ||userKey === "Tab") {
  nextLetter = document.getElementById(rightLetter);
   console.log("Captured key string:", userKey);
   }
   else if(userKey === "ArrowDown" ||userKey === "Enter") {
   nextLetter = document.getElementById(downLetter);
   console.log("Captured key string:", userKey);
   }
   else if(userKey === "Backspace" || userKey === "Delete") {
  currentLetter.textContent = "";
  event.preventDefault();
  return;

   console.log("Captured key string:", userKey);
   }
   else if(event.key ===" ") {
   switchTypeDirection();
   console.log("Captured key string:", userKey);
   }
  else if (/^[a-z]$/i.test(userKey)) {
   currentLetter.textContent = userKey.toUpperCase(); 
  // getChar(userKey);
   console.log("Captured key string:", userKey);
   } else{
      return;
   }
   if (nextLetter) {
      formatPuzzle(nextLetter);
event.preventDefault();
}

}





/*====================================================*/
  function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}

// Addition of the event listener
window.addEventListener("keydown", selectLetter);
}


