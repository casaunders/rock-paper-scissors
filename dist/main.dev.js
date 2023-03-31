"use strict";

// Need use of media queries and classes to distinguish on page - hookup
var display_selection_com = document.querySelector(".selection__com");
var display_selection_user = document.querySelector(".selection__user");
var display_selection_result = document.querySelector(".selection__result");
var display_selection_choice = document.querySelectorAll(".selection__button");
var winCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");
var drawCount = document.getElementById("draw-count");
var selection__com;
var selection__user;
var selection__result;
var playerWinCount = 0;
var playerLossCount = 0;
var playerDrawCount = 0; // Create functions to create user selection
// Use functions and forLoops where we can

display_selection_choice.forEach(function (selection__button) {
  return selection__button.addEventListener("click", function (e) {
    selection__user = e.currentTarget.id;
    display_selection_user.innerHTML = selection__user;
    generate_com_selection();
    generate__result();
  });
}); // create functions to generate computer selection
// Calculate selection outcome of events
// Use 'if statements' to work through outcome of events

var generate_com_selection = function generate_com_selection() {
  var random__number = Math.floor(Math.random() * 3) + 1;

  if (random__number === 1) {
    selection__com = "Grass";
  }

  if (random__number === 2) {
    selection__com = "Fire";
  }

  if (random__number === 3) {
    selection__com = "Water";
  }

  display_selection_com.innerHTML = selection__com;
}; // Calculate a formula to determine a winner


var refreshPage = function refreshPage() {
  window.location.reload();
};

var generate__result = function generate__result() {
  if (selection__com === selection__user) {
    selection__result = "A Draw!";
    playerDrawCount++;
  }

  if (selection__com === "Grass" && selection__user === "Water") {
    selection__result = "A Loss!";
    playerLossCount++;
  }

  if (selection__com === "Grass" && selection__user === "Fire") {
    selection__result = "A Win!";
    playerWinCount++;
  }

  if (selection__com === "Fire" && selection__user === "Water") {
    selection__result = "A Win!";
    playerWinCount++;
  }

  if (selection__com === "Fire" && selection__user === "Grass") {
    selection__result = "A Loss!";
    playerLossCount++;
  }

  if (selection__com === "Water" && selection__user === "Grass") {
    selection__result = "A Win!";
    playerWinCount++;
  }

  if (selection__com === "Water" && selection__user === "Fire") {
    selection__result = "A Loss!";
    playerLossCount++;
  }

  display_selection_result.innerHTML = selection__result;
  winCount.textContent = "Wins: ".concat(playerWinCount);
  lossCount.textContent = "Loss: ".concat(playerLossCount);
  drawCount.textContent = "Draws: ".concat(playerDrawCount);
};

module.exports = {
  generate_com_selection: generate_com_selection,
  generate__result: generate__result
};