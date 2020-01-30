const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });

  it("Returns the same string if string length matches num", () => {
    expect(wrap("abcdefghik", 10)).to.equal("abcdefghik");
  });

  it("Starts a new line if string is longer than given length", () => {
    expect(wrap("abcdefghijk", 10)).to.equal("abcdefghij" + "\n" + "k");
  });
});
