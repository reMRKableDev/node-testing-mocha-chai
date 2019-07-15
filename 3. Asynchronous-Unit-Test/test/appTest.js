const assert = require("assert");
const app = require("../app");

// describe() is used for grouping test cases. Describe can be nested.
// it() is a test case

describe("Async Unit Test", function() {
  it("tests if the actual value of retrieved data is equal to expected value", function(done) {
    app.readFile(function(error, data) {
      let actualValue = data;
      let expectedValue = "hello there!";
      assert.strictEqual(actualValue, expectedValue);
      done();
    });
  });
  it("tests if there is no error thrown when running function", function(done) {
    app.readFile(function(error, data) {
      assert.ifError(null);
      done();
    });
  });
});
