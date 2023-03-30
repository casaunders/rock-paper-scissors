// Need use of media queries and classes to distinguish on page - hookup
let playerScoreEl = document.getElementById('playerScore');
let compScoreEl = document.getElementById('compScore');
const display_selection_com = document.querySelector(".selection__com");
const display_selection_user = document.querySelector(".selection__user");
const display_selection_result = document.querySelector(".selection__result");
const display_selection_choice = document.querySelectorAll(".selection__button");
let selection__com
let selection__user
let selection__result

// Create functions to create user selection
// Use functions and forLoops where we can

display_selection_choice.forEach(selection__button => selection__button.addEventListener("click", (e) => {
    selection__user = e.currentTarget.id
    display_selection_user.innerHTML = selection__user
    generate_com_selection()
    generate__result()
}));

// create functions to generate computer selection
// Calculate selection outcome of events
// Use 'if statements' to work through outcome of events

const generate_com_selection = () => {
    const random__number = Math.floor(Math.random() * 18) + 1
    
    if (random__number === 1) {
        selection__com = "Grass"
    }
    if (random__number === 2) {
        selection__com = "Fire"
    }
    if (random__number === 3) {
        selection__com = "Water"
    }
    if (random__number === 4) {
        selection__com = "Electric"
    }
    if (random__number === 5) {
        selection__com = "Rock"
    }
    if (random__number === 6) {
        selection__com = "Flying"
    }
    if (random__number === 7) {
        selection__com = "Bug"
    }
    if (random__number === 8) {
        selection__com = "Psychic"
    }
    if (random__number === 9) {
        selection__com = "Normal"
    }
    if (random__number === 10) {
        selection__com = "Ghost"
    }
    if (random__number === 11) {
      selection__com = "Ground"
    }
    if (random__number === 12) {
      selection__com = "Ice"
    }
    if (random__number === 13) {
      selection__com = "Dragon"
    }
    if (random__number === 14) {
      selection__com = "Dark"
    }
    if (random__number === 15) {
      selection__com = "Fairy"
    }
    if (random__number === 16) {
      selection__com = "Fighting"
    }
    if (random__number === 17) {
      selection__com = "Steel"
    }
    if (random__number === 18) {
      selection__com = "Poison"
    }
      display_selection_com.innerHTML = selection__com
}

// Calculate a formula to determine a winner

const generate__result = () => {
    if (selection__com === selection__user) {
      selection__result = "A Draw!"
    }
    if (selection__com === "Grass" && selection__user === "Water") {
      selection__result = "A Loss!"
    }
    if (selection__com === "Grass" && selection__user === "Fire") {
      selection__result = "A Win!"
    }
    if (selection__com === "Fire" && selection__user === "Water") {
      selection__result = "A Win!"
    }
    if (selection__com === "Fire" && selection__user === "Grass") {
      selection__result = "A Loss!"
    }
    if (selection__com === "Water" && selection__user === "Grass") {
      selection__result = "A Win!"
    }
    if (selection__com === "Water" && selection__user === "Fire") {
      selection__result = "A Loss!"
    }
    display_selection_result.innerHTML = selection__result
  }

  module.exports = { generate_com_selection };