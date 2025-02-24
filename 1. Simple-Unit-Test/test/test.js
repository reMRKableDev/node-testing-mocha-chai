const assert = require("assert");

// describe() is used for grouping test suites. Describe can be nested.
// it() is a test case.

describe("String Comparison", () => {
  const testName = "Peter";
  
  it("should match exact case-sensitive string", () => {
    assert(testName === "Peter");
  });
  
  it("should not match case-insensitive string", () => {
    assert(testName !== "peter");
  });
  
  it("should be case-sensitive when comparing strings", () => {
    const lowerCaseName = testName.toLowerCase();
    assert(testName !== lowerCaseName);
  });
});