const countVowels = require("../count-vowels.js");

describe("countVowels", () => {

  test("counts vowels in a word", () => {
    expect(countVowels("Eltoids")).toBe(3);
  });

});