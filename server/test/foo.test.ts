import * as chai from "chai";
const expect = chai.expect;

const dummyFunction = () => true;

describe("Test", () => {
  it("should return true", () => {
    const result = dummyFunction();
    expect(result).to.equal(true);
  });
});
