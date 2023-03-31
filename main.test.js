const { generate_com_selection, generate__result } = require("./main.js");

test("Generates a random outcome.", () => {
  expect((random__number = Math.floor(Math.random() * 3) + 1)).toBe(1, 2, 3);
});
