const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  
  test("returns a string", () => {
    expect (typeof(booleanToWord(true))).toBe("string");
    expect (typeof(booleanToWord(false))).toBe("string")
  
});

test('returns the string "yes" when passed the boolean true',() => {
  expect(booleanToWord(true)).toBe("yes");
});

test('returns the string "no" when passed the boolean false',() => {
  expect(booleanToWord(false)).toBe("no");
});

});