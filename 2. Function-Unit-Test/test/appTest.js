const assert = require("assert");
const app = require("../app");

// describe() is used for grouping test suites. Describe can be nested.
// it() is a test case

describe("Functions Test Suite", function() {
  describe("Boolean Expression Unit Test", function() {
    let actualValue = app.booleanExpression();
    it("tests if actualValue is the same as expectedValue", function() {
      let expectedValue = true;
      assert(actualValue === expectedValue);
    });
    it("tests if actual value is of type Boolean", function() {
      assert(typeof actualValue === "boolean");
    });
  });
  describe("Simple Calculation Unit Test", function() {
    let actualValue = app.simpleCalculation();
    it("tests if the actual value of number is an Integer", function() {
      assert(Number.isInteger(actualValue));
    });
    it("tests if actual value of number is equal to the expected value", function() {
      let expectedValue = 9;
      assert(actualValue === expectedValue);
    });
  });
  describe("Array Unit Test", function() {
    let actualValue = app.arrayBuilder();
    it("tests if actual value of array is equal to the expected value", function() {
      let expectedValue = [1, 2, 3, 4, 5];
      assert.deepEqual(actualValue, expectedValue);
    });
    it("tests if actual value of array is not equal to the expected value", function() {
      let expectedValue = [1, 2, 3, 5];
      assert.notDeepEqual(actualValue, expectedValue);
    });
  });
  describe("Object Unit Test", function() {
    let actualValue = app.objectCreator();
    it("tests if actual value of object is equal to the expected value", function() {
      let expectedValue = {
        name: "es",
        age: "21"
      };
      assert.deepEqual(actualValue, expectedValue);
    });
    it("tests if actual value of object is not equal to the expected value", function() {
      let expectedValue = {
        name: "se",
        age: "19"
      };
      assert.notDeepEqual(actualValue, expectedValue);
    });
  });
  describe("Function w/ args Unit Test", function() {
    it("tests if user passed in params is valid. Returns: true", function() {
      let isValid = app.validUser(["sally", "jon"], "sally");
      assert(isValid);
    });
    it("tests if user passed in params is valid. Returns: false", function() {
      let isValid = app.validUser(["sally", "jon"], "duck");
      assert(!isValid);
    });
  });
});
