// Need use of media queries and classes to distinguish on page - hookup

const display_selection_com = document.querySelector(".selection__com")
const display_selection_user = document.querySelector(".selection__user")
const display_selection_result = document.querySelector(".selection__result")
const display_selection_choice = document.querySelectorAll(".selection__button")
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
    const random__number = Math.floor(Math.random() * 3) + 1
    
    if (random__number === 1) {
        selection__com = "Grass"
    }
    if (random__number === 2) {
        selection__com = "Fire"
    }
    if (random__number === 3) {
        selection__com = "Water"
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
      selection__result = "A Loss!"
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