// Need use of media queries and classes to distinguish on page - hookup

const display_selection_com = document.querySelector("selection__com")
const display_selection_user = document.querySelector("selection__user")
const display_selection_result = document.querySelector("selection__result")
const display_selection_choice = document.querySelectorAll("button")
let selection__com
let selection__user
let selection__result

// Create functions to create user selection

display_selection_choice.forEach(possible__selection => possible__selection.addEventListener("click", (e) => {
    selection__user = e.target.id
    display_selection_user.innerHTML = selection__user
    generate_com_selection()
}))

// create functions to generate computer selection
// Calculate selection outcome of events
// Use 'if statements' to work through outcome of events

function generate_com_selection() {
    const random__number = Math.floor(Math.random() * 3) + 1;
    
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
// Use functions and forLoops where we can

