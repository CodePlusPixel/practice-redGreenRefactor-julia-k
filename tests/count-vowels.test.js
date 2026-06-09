const countVowels = require("../count-vowels.js");

describe("countVowels", () => {

  // Positive case test (valid input with vowels)
  test("counts vowels in a word", () => {
    expect(countVowels("Eltoids")).toBe(3);
  });

  // Negative case test (valid input, but no vowels)
  test("returns 0 when there are no vowels", () => {
    expect(countVowels("shhhhh")).toBe(0);
  });

  // Edge case test (empty input)
  test("returns 0 for empty string", () => {
    expect(countVowels("")).toBe(0);
  });

});