const app = require("../app");
const chai = require("chai");

const assert = chai.assert;

describe("API Unit Test", function() {
  it("tests if API call does not return an empty value", async () => {
    const apiCallTest = await app.apiCall();

    assert.isNotEmpty(apiCallTest);
    assert.isNotNull(apiCallTest);
  });

  it("tests if API call returns an array with multiple elements", async () => {
    const apiCallTest = await app.apiCall();

    assert.isArray(apiCallTest);
    assert.isAbove(apiCallTest.length, 1);
  });
});
