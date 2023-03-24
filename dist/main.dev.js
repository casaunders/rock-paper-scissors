"use strict";

// Need use of media queries and classes to distinguish on page - hookup
var display_selection_com = document.querySelector("selection__com");
var display_selection_user = document.querySelector("selection__user");
var display_selection_result = document.querySelector("selection__result");
var display_selection_choice = document.querySelectorAll("button");
var selection__com;
var selection__user;
var selection__result; // Create functions to create user selection

display_selection_choice.forEach(function (possible__selection) {
  return possible__selection.addEventListener("click", function (e) {
    selection__user = e.target.id;
    display_selection_user.innerHTML = selection__user;
    generate_com_selection();
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
// Use functions and forLoops where we can