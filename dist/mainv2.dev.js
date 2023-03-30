"use strict";

var playerScoreEl = document.getElementById('playerScore');
var playerChoiceEl = document.getElementById('playerChoice');
var compScoreEl = document.getElementById('compScore');
var compChoiceEl = document.getElementById('compChoice');
var playerRock = document.getElementById('playerRock');
var playerPaper = document.getElementById('playerPaper');
var playerScissors = document.getElementById('playerScissors');
var compRock = document.getElementById('compRock');
var compPaper = document.getElementById('compPaper');
var compScissors = document.getElementById('compScissors');
var gameIcons = document.querySelectorAll('.far');
var choices = {
  rock: {
    name: 'Rock',
    defeats: 'scissors'
  },
  paper: {
    name: 'Paper',
    defeats: 'rock'
  },
  scissors: {
    name: 'Scissors',
    defeats: 'paper'
  }
}; //console.log(gameIcons);

var playerScoreNumber = 0;
var compScoreNumber = 0;
var compChoice = '';

function resetAll() {
  playerScoreNumber = 0;
  compScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  compScoreEl.textContent = compScoreNumber;
  playerChoiceEl.textContent = '';
  compChoiceEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
}

function compRandomChoice() {
  var compChoiceNumber = Math.random();

  if (compChoiceNumber < 0.2) {
    compChoice = 'rock';
  } else if (compChoiceNumber <= 0.4) {
    compChoice = 'paper';
  } else if (compChoiceNumber <= 0.6) {
    compChoice = 'scissors';
  } //console.log(compChoice);

}

function displayCompChoice() {
  switch (compChoice) {
    case 'rock':
      compRock.classList.add('selected');
      compChoiceEl.textContent = '--Rock';
      break;

    case 'paper':
      compPaper.classList.add('selected');
      compChoiceEl.textContent = '--Paper';
      break;

    case 'scissors':
      compScissors.classList.add('selected');
      compChoiceEl.textContent = '--Scissors';
      break;

    default:
      break;
  }
}

function updateScore(playerChoice) {
  //console.log(playerChoice, compChoice);
  if (playerChoice === compChoice) {
    resultText.textContent = "It's a tie";
  } else {
    var choice = choices[playerChoice];

    if (choice.defeats.indexOf(compChoice) > -1) {
      resultText.textContent = "You Won!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You Lost!";
      compScoreNumber++;
      compScoreEl.textContent = compScoreNumber;
    }
  }
}

function resetSelected() {
  gameIcons.forEach(function (icon) {
    icon.classList.remove('selected');
  });
}

function checkResult(playerChoice) {
  resetSelected();
  compRandomChoice();
  displayCompChoice();
  updateScore(playerChoice);
}

function select(playerChoice) {
  checkResult(playerChoice); //console.log(playerChoice);

  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '--Rock';
      break;

    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = '--Paper';
      break;

    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoice.textContent = '--Scissors';
      break;

    default:
      break;
  }
}