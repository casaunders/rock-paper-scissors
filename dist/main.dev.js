"use strict";

// Need use of media queries and classes to distinguish on page - hookup
var display_selection_com = document.querySelector("selection__com");
var display_selection_user = document.querySelector("selection__user");
var display_selection_result = document.querySelector("selection__result");
var display_selection_choice = document.querySelectorAll("button");
var selection__com;
var selection__user;
var selection__result; // Create functions to create user selection
// Use functions and forLoops where we can

display_selection_choice.forEach(function (possible__selection) {
  return possible__selection.addEventListener("click", function (x) {
    selection__user = x.target.id;
    display_selection_user.innerHTML = selection__user;
    generate_com_selection();
    generate__result();
  });
}); // create functions to generate computer selection
// Calculate selection outcome of events
// Use 'if statements' to work through outcome of events

function generate_com_selection() {
  var random__number = Math.floor(Math.random() * 3) + 1;

  if (random__number === 1) {
    selection__com = "_grass";
  }

  if (random__number === 2) {
    selection__com = "_fire";
  }

  if (random__number === 3) {
    selection__com = "_water";
  }

  display_selection_choice.innerHTML = selection__com;
} // Calculate a formula to determine a winner


function generate__result() {
  if (selection__com === selection__user) {
    selection__result = "A Draw!";
  }

  if (selection__com === "_grass" && selection__user === "_water") {
    result = "You Win!";
  }

  if (selection__com === "_grass" && selection__user === "_fire") {
    result = "You Lost!";
  }

  if (selection__com === "_fire" && selection__user === "_water") {
    result = "You Win!";
  }

  if (selection__com === "_fire" && selection__user === "_grass") {
    result = "You Lost!";
  }

  if (selection__com === "_water" && selection__user === "_grass") {
    result = "You Win!";
  }

  if (selection__com === "_water" && selection__user === "_fire") {
    result = "You Lost!";
  }

  display_selection_result.innerHTML = selection__result;
}