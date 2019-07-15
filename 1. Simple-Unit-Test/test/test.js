const assert = require("assert");

// describe() is used for grouping test suites. Describe can be nested.
// it() is a test case.

describe("Name Unit Test", function() {
  let actualValue = "Peter";

  it("tests if the actualValue is the same as the expectedValue", function() {
    let expectedValue = "Peter";
    assert(actualValue === expectedValue);
  });
  it("tests if the actualValue isn't similar to the expectedValue", function() {
    let expectedValue = "peter";
    assert(actualValue !== expectedValue);
  });
});
