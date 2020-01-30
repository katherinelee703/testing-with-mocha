const { expect } = require("chai");
const twoSum = require("./twoSum");

describe("twoSum", () => {
  it("Returns an empty array if given an empty array or one with less than 2 elements", () => {
    expect(twoSum([1], 5)).to.deep.equal([]); //why deep exactly?
  });

  it("Returns elements indexes for the 2 elements that add up to targetNum", () => {
    expect(twoSum([2, 3], 5)).to.deep.equal([0, 1]);
  });

  it("wont use the same number twice when adding diff elements", () => {
    expect(twoSum([2, 3, 3], 6)).to.deep.equal([]);
  });

  it("wont use the same number twice when adding diff elements - longer test", () => {
    expect(twoSum([2, 3, 3, 4], 6)).to.deep.equal([0, 3]);
  });
});
