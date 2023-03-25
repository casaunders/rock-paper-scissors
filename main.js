// Need use of media queries and classes to distinguish on page - hookup

const display_selection_com = document.querySelector("selection__com")
const display_selection_user = document.querySelector("selection__user")
const display_selection_result = document.querySelector("selection__result")
const display_selection_choice = document.querySelectorAll("button")
let selection__com
let selection__user
let selection__result

// Create functions to create user selection
// Use functions and forLoops where we can

display_selection_choice.forEach(possible__selection => possible__selection.addEventListener("click", (x) => {
    selection__user = x.target.id
    display_selection_user.innerHTML = selection__user
    generate_com_selection()
    generate__result()
}))

// create functions to generate computer selection
// Calculate selection outcome of events
// Use 'if statements' to work through outcome of events

function generate_com_selection() {
    const random__number = Math.floor(Math.random() * 3) + 1
    
    if (random__number === 1) {
        selection__com = "_grass"
    }
    if (random__number === 2) {
        selection__com = "_fire"
    }
    if (random__number === 3) {
        selection__com = "_water"
    }
      display_selection_choice.innerHTML = selection__com
}

// Calculate a formula to determine a winner

function generate__result() {
    if (selection__com === selection__user) {
      selection__result = "A Draw!"
    }
    if (selection__com === "_grass" && selection__user === "_water") {
      result = "You Win!"
    }
    if (selection__com === "_grass" && selection__user === "_fire") {
      result = "You Lost!"
    }
    if (selection__com === "_fire" && selection__user === "_water") {
      result = "You Win!"
    }
    if (selection__com === "_fire" && selection__user === "_grass") {
      result = "You Lost!"
    }
    if (selection__com === "_water" && selection__user === "_grass") {
      result = "You Win!"
    }
    if (selection__com === "_water" && selection__user === "_fire") {
      result = "You Lost!"
    }
    display_selection_result.innerHTML = selection__result
  }