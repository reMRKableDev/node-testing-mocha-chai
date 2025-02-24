const assert = require("assert");
const app = require("../app");

describe("Functions", () => {
  describe("booleanExpression()", () => {
    const result = app.booleanExpression();

    it("should return true", () => {
      assert(result === true);
    });

    it("should return a boolean value", () => {
      assert(typeof result === "boolean");
    });
  });

  describe("simpleCalculation()", () => {
    const result = app.simpleCalculation();

    it("should return an integer", () => {
      assert(Number.isInteger(result));
    });

    it("should return 9", () => {
      assert(result === 9);
    });
  });

  describe("arrayBuilder()", () => {
    const result = app.arrayBuilder();

    it("should return [1, 2, 3, 4, 5]", () => {
      assert.deepEqual(result, [1, 2, 3, 4, 5]);
    });

    it("should not return [1, 2, 3, 5]", () => {
      assert.notDeepEqual(result, [1, 2, 3, 5]);
    });
  });

  describe("objectCreator()", () => {
    const result = app.objectCreator();

    it("should return object with name 'es' and age 21", () => {
      assert.deepEqual(result, {
        name: "es",
        age: 21, // Updated to match change in app.js
      });
    });

    it("should not return object with different values", () => {
      assert.notDeepEqual(result, {
        name: "se",
        age: 19,
      });
    });
  });

  describe("validUser()", () => {
    it("should return true for existing users", () => {
      const isValid = app.validUser(["sally", "jon"], "sally");
      assert(isValid);
    });

    it("should return false for non-existing users", () => {
      const isValid = app.validUser(["sally", "jon"], "duck");
      assert(!isValid);
    });
  });
});
