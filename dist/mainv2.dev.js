"use strict";

// Need use of media queries and classes to distinguish on page - hookup
var display_selection_com = document.querySelector(".selection__com");
var display_selection_user = document.querySelector(".selection__user");
var display_selection_result = document.querySelector(".selection__result");
var display_selection_choice = document.querySelectorAll(".selection__button");
var selection__com;
var selection__user;
var selection__result; // Create functions to create user selection
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
  var random__number = Math.floor(Math.random() * 18) + 1;

  if (random__number === 1) {
    selection__com = "Grass";
  }

  if (random__number === 2) {
    selection__com = "Fire";
  }

  if (random__number === 3) {
    selection__com = "Water";
  }

  if (random__number === 4) {
    selection__com = "Electric";
  }

  if (random__number === 5) {
    selection__com = "Rock";
  }

  if (random__number === 6) {
    selection__com = "Flying";
  }

  if (random__number === 7) {
    selection__com = "Bug";
  }

  if (random__number === 8) {
    selection__com = "Psychic";
  }

  if (random__number === 9) {
    selection__com = "Normal";
  }

  if (random__number === 10) {
    selection__com = "Ghost";
  }

  if (random__number === 11) {
    selection__com = "Ground";
  }

  if (random__number === 12) {
    selection__com = "Ice";
  }

  if (random__number === 13) {
    selection__com = "Dragon";
  }

  if (random__number === 14) {
    selection__com = "Dark";
  }

  if (random__number === 15) {
    selection__com = "Fairy";
  }

  if (random__number === 16) {
    selection__com = "Fighting";
  }

  if (random__number === 17) {
    selection__com = "Steel";
  }

  if (random__number === 18) {
    selection__com = "Poison";
  }

  display_selection_com.innerHTML = selection__com;
}; // Calculate a formula to determine a winner


var generate__result = function generate__result() {
  if (selection__com === selection__user) {
    selection__result = "A Draw!";
  } // Grass


  if (selection__com === "Grass" && selection__user === "Water") {
    selection__result = "A Loss!";
  }

  if (selection__com === "Grass" && selection__user === "Ground") {
    selection__result = "A Loss!";
  }

  if (selection__com === "Grass" && selection__user === "Rock") {
    selection__result = "A Loss!";
  }

  if (selection__com === "Grass" && selection__user === "Fire") {
    selection__result = "A Win!";
  }

  if (selection__com === "Grass" && selection__user === "Ice") {
    selection__result = "A Win!";
  }

  if (selection__com === "Grass" && selection__user === "Poison") {
    selection__result = "A Win!";
  }

  if (selection__com === "Grass" && selection__user === "Flying") {
    selection__result = "A Win!";
  }

  if (selection__com === "Grass" && selection__user === "Bug") {
    selection__result = "A Win!";
  } // Rock


  if (selection__com === "Rock" && selection__user === "Ice") {
    selection__result = "A Loss!";
  }

  if (selection__com === "Rock" && selection__user === "Water") {
    selection__result = "A Loss!";
  }

  if (selection__com === "Rock" && selection__user === "Grass") {
    selection__result = "A Loss!";
  }

  if (selection__com === "Rock" && selection__user === "Fighting") {
    selection__result = "A Loss!";
  }

  if (selection__com === "Rock" && selection__user === "Ground") {
    selection__result = "A Loss!";
  }

  if (selection__com === "Rock" && selection__user === "Steel") {
    selection__result = "A Loss!";
  }

  if (selection__com === "Rock" && selection__user === "Fire") {
    selection__result = "A Win!";
  }

  if (selection__com === "Rock" && selection__user === "Ice") {
    selection__result = "A Win!";
  }

  if (selection__com === "Rock" && selection__user === "Flying") {
    selection__result = "A Win!";
  }

  if (selection__com === "Rock" && selection__user === "Bug") {
    selection__result = "A Win!";
  } // Ice


  if (selection__com === "Ice" && selection__user === "Grass") {
    selection__result = "A Loss!";
  }

  if (selection__com === "Ice" && selection__user === "Ground") {
    selection__result = "A Loss!";
  }

  if (selection__com === "Ice" && selection__user === "Flying") {
    selection__result = "A Loss!";
  }

  if (selection__com === "Ice" && selection__user === "Dragon") {
    selection__result = "A Loss!";
  }

  if (selection__com === "Ice" && selection__user === "Fire") {
    selection__result = "A Win!";
  }

  if (selection__com === "Ice" && selection__user === "Fighting") {
    selection__result = "A Win!";
  }

  if (selection__com === "Ice" && selection__user === "Rock") {
    selection__result = "A Win!";
  }

  if (selection__com === "Ice" && selection__user === "Steel") {
    selection__result = "A Win!";
  } // Dragon


  if (selection__com === "Dragon" && selection__user === "Ice") {
    selection__result = "A Win!";
  }

  if (selection__com === "Dragon" && selection__user === "Fairy") {
    selection__result = "A Win!";
  }

  display_selection_result.innerHTML = selection__result;
};

module.exports = {
  generate_com_selection: generate_com_selection
};