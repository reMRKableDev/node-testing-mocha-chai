const app = require("../app");
const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;

describe("objectCreator()", () => {
  let testObject;

  beforeEach(() => {
    testObject = app.objectCreator();
  });

  describe("BDD style tests", () => {
    it("should return a valid object with expected properties", () => {
      expect(testObject).to.be.an("object").and.is.ok;

      expect(testObject).to.have.property("sub").that.is.an("object").and.is.ok;

      expect(testObject.sub)
        .to.have.property("name")
        .that.is.a("string")
        .and.to.equal("test nested object");

      expect(testObject)
        .to.have.property("numbers")
        .that.deep.equals([5, 4, 3, 2, 1]);

      expect(testObject).to.have.property("hasNumbers", true);
    });
  });

  describe("TDD style tests", () => {
    it("should return a valid object with expected properties", () => {
      assert.isOk(testObject);
      assert.isObject(testObject);

      assert.propertyVal(testObject, "name", "test object");

      assert.property(testObject, "sub");
      assert.propertyVal(testObject.sub, "name", "test nested object");

      assert.deepEqual(testObject.numbers, [5, 4, 3, 2, 1]);

      assert.typeOf(testObject.hasNumbers, "boolean");
      assert.isTrue(testObject.hasNumbers);
    });
  });
});
