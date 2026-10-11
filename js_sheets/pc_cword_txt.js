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

function init() {

   // Set allLetters to reference all elements using a selector tab

   allLetters = document.querySelectorAll("table#crossword span");
   console.log("1. Checked elements:", allLetters); // <-- Check #1: Did it find the spans?


// set current letter to the first object in allLetters index

currentLetter = allLetters[0];

// Set across clue and down clue to dataset values
acrossClue = currentLetter.dataset.clueA;
downClue = currentLetter.dataset.clueD;


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
   downClueClue = puzzleLetter.dataset.clueD;
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
   wordLetters[i].style.backgroundColor = "rgb(255, 231, 231)";
}
if (typingDirection === 'right') {
   this.style.backgroundColor = rgb(191, 191, 255);
}else {
   this.style.backgroundColor = rgb(255, 191, 191);
}


/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
}
}