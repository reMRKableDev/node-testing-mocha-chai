const assert = require("assert");
const app = require("../app");

describe("File Reading", () => {
  it("should read the correct content from file", (done) => {
    app.readFile((error, data) => {
      const expectedContent = "hello there!";
      assert.strictEqual(data, expectedContent);
      done();
    });
  });

  it("should not encounter errors during file reading", (done) => {
    app.readFile((error, data) => {
      assert.strictEqual(error, null);
      done();
    });
  });
});
